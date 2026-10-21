interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol !== 'https:' || url.hostname === 'www.devilstearsbali.com') {
      url.protocol = 'https:'; url.hostname = 'devilstearsbali.com'; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const isErrorPath = /^\/404(?:\.html)?\/?$/.test(url.pathname);
    // Use the configured missing-page document without asset canonical redirects.
    const assetRequest = isErrorPath
      ? new Request(new URL('/__devils_tears_error_document__', url), request)
      : request;
    const response = await env.ASSETS.fetch(assetRequest);
    if (!isErrorPath && response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(response.body, { status: 404, headers });
  }
};
