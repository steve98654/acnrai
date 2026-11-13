// Cloudflare Workers (static assets): run the password gate before serving
// any file from dist/. run_worker_first in wrangler.jsonc makes this run for
// every request, including ones that match a static file.
import { gate } from '../gate/gate.js';

export default {
  fetch(request, env) {
    return gate(request, env, () => env.ASSETS.fetch(request));
  },
};
