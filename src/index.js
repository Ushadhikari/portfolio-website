export default {
  async fetch(request, env, ctx) {
    return new Response('Portfolio Website served via Cloudflare Pages', {
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};
