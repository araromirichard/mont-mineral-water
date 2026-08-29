#!/bin/bash
set -e

SERVER="master_ynsghkpsdf@157.245.250.52"
REMOTE_BUILD="/home/master/applications/mpxgpjvstv/public_html/public/build/"
LOCAL_BUILD="$(dirname "$0")/public/build/"

echo "Building assets..."
npm run build

echo "Uploading build to production..."
rsync -avz --delete "$LOCAL_BUILD" "$SERVER:$REMOTE_BUILD"

echo "Done. Remember to pull from Cloudways UI if you pushed new code."
