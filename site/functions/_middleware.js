// Cloudflare Pages: run the shared password gate in front of every request.
import { gate } from '../gate/gate.js';

export const onRequest = ({ request, env, next }) => gate(request, env, next);
