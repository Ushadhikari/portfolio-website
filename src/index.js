export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Default to index.html for root path
    let filePath = url.pathname === '/' ? '/index.html' : url.pathname;
    
    try {
      // Try to get the file from the public directory
      const response = await env.ASSETS.fetch(request);
      return response;
    } catch (e) {
      // Fallback: serve index.html
      return new Response(await env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request)), {
        headers: { 'Content-Type': 'text/html' },
      });
    }
  },
};
