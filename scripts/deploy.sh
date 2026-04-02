#!/usr/bin/env bash
set -euo pipefail

echo "==> Starting deploy in $(pwd)"

# Safety: ensure the script runs from Laravel project root.
if [[ ! -f artisan || ! -f composer.json ]]; then
  echo "ERROR: Run this script from your Laravel project root (where artisan exists)."
  exit 1
fi

# Optional: set PULL_LATEST=true to pull before deploy.
if [[ "${PULL_LATEST:-false}" == "true" ]]; then
  echo "==> Pulling latest code"
  git pull origin "${DEPLOY_BRANCH:-main}"
fi

# 2) PHP dependencies + Laravel cache steps
composer install --no-dev --prefer-dist --optimize-autoloader
php artisan migrate --force
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 3) Frontend build (skip npm ci when lockfile is unchanged)
LOCKFILE="package-lock.json"
LOCK_HASH_FILE="storage/framework/cache/.deploy-package-lock.sha256"

if [[ -f "$LOCKFILE" ]]; then
  mkdir -p "$(dirname "$LOCK_HASH_FILE")"

  NEW_HASH="$(sha256sum "$LOCKFILE" | awk '{print $1}')"
  OLD_HASH=""

  if [[ -f "$LOCK_HASH_FILE" ]]; then
	OLD_HASH="$(cat "$LOCK_HASH_FILE")"
  fi

  if [[ ! -d node_modules || "$NEW_HASH" != "$OLD_HASH" ]]; then
	echo "==> package-lock changed (or node_modules missing). Running npm ci"
	npm ci
	echo "$NEW_HASH" > "$LOCK_HASH_FILE"
  else
	echo "==> package-lock unchanged. Skipping npm ci"
  fi
else
  echo "==> No package-lock.json found. Skipping npm ci"
fi

echo "==> Building frontend assets"
npm run build

# 4) Quick health check
php artisan route:list --name=erp

echo "==> Deploy complete"
