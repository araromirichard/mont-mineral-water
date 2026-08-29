<?php
$storagePath = dirname(dirname(__DIR__)) . '/storage/app/public';
$requestPath = $_SERVER['REQUEST_URI'];
$file = preg_replace(['/^\/storage/', '/\?.*/'], '', $requestPath);
$file = ltrim(str_replace(['..', "\0"], '', $file), '/');
$fullPath = $storagePath . '/' . $file;
if (!file_exists($fullPath) || !is_file($fullPath)) { http_response_code(404); exit('Not Found'); }
$finfo = new finfo(FILEINFO_MIME_TYPE);
header('Content-Type: ' . $finfo->file($fullPath));
header('Content-Length: ' . filesize($fullPath));
header('Cache-Control: public, max-age=2592000');
readfile($fullPath);
