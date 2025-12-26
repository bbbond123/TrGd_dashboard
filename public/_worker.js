/**
 * Cloudflare Pages Worker
 *
 * Reverse proxy for API requests:
 * admin.ifoodme.com/api/** -> hono.ifoodme.com/api/**
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle /api/** requests - proxy to hono.ifoodme.com
    if (url.pathname.startsWith('/api/')) {
      const apiUrl = new URL(request.url);
      apiUrl.hostname = 'hono.ifoodme.com';
      apiUrl.protocol = 'https:';

      // Create new request with modified URL
      // Preserve original headers, body, method, etc.
      const newHeaders = new Headers(request.headers);
      newHeaders.set('Host', 'hono.ifoodme.com');

      const newRequest = new Request(apiUrl.toString(), {
        method: request.method,
        headers: newHeaders,
        body: request.body,
        redirect: 'follow',
      });

      try {
        const response = await fetch(newRequest);

        // Create a new response to ensure we can modify headers if needed
        const newResponse = new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });

        return newResponse;
      } catch (error) {
        return new Response(JSON.stringify({
          error: 'API proxy error',
          message: error.message
        }), {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // All other requests - serve static assets from Cloudflare Pages
    return env.ASSETS.fetch(request);
  },
};
