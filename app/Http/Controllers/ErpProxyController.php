<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ErpProxyController extends Controller
{
    /**
     * The base URL of the ERP (ORDS) server.
     */
    private const ERP_BASE_URL = 'http://69.28.70.242:9090';

    /**
     * Headers that should not be forwarded back to the client
     * to avoid conflicts with Laravel's own session / encoding.
     */
    private const SKIP_RESPONSE_HEADERS = [
        'transfer-encoding',
        'content-encoding',
        'set-cookie',
        'connection',
        'keep-alive',
        'x-powered-by',
    ];

    /**
     * Forward any request under /ords/* to the ERP server.
     */
    public function handle(Request $request, string $path = ''): \Illuminate\Http\Response
    {
        return $this->forward($request, 'ords', $path);
    }

    /**
     * Forward ORDS static assets under /i/*.
     */
    public function handleAssets(Request $request, string $path = ''): \Illuminate\Http\Response
    {
        return $this->forward($request, 'i', $path);
    }

    private function forward(Request $request, string $basePath, string $path = ''): \Illuminate\Http\Response
    {
        $normalizedPath = ltrim($path, '/');
        $targetUrl = self::ERP_BASE_URL . '/' . $basePath;

        if ($normalizedPath !== '') {
            $targetUrl .= '/' . $normalizedPath;
        }

        // Append any original query string
        $queryString = $request->getQueryString();
        if ($queryString) {
            $targetUrl .= '?' . $queryString;
        }

        // Forward relevant request headers (strip host so Guzzle sets it correctly)
        $forwardHeaders = collect($request->headers->all())
            ->except(['host', 'connection', 'content-length'])
            ->map(fn ($v) => implode(', ', $v))
            ->toArray();

        // Override the Host header to match the ERP server
        $forwardHeaders['Host'] = '69.28.70.242';

        // Build and send the proxied request
        $erpResponse = Http::withHeaders($forwardHeaders)
            ->withOptions([
                'allow_redirects' => false, // let the client handle redirects
                'timeout'         => 30,
            ])
            ->send($request->method(), $targetUrl, [
                'body' => $request->getContent(),
            ]);

        // Filter response headers before passing them back
        $responseHeaders = collect($erpResponse->headers())
            ->except(self::SKIP_RESPONSE_HEADERS)
            ->map(fn ($v) => is_array($v) ? implode(', ', $v) : $v)
            ->toArray();

        return response($erpResponse->body(), $erpResponse->status())
            ->withHeaders($responseHeaders);
    }
}

