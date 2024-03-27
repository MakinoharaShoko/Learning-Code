/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const axios = require('axios');
const { Router } = require('itty-router');

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	devc: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;

	DB: D1Database
}

const router = Router();

router
	.get('/', () => new Response('Hello, devc!'))
	.get('/user/:id', (req: any) => Response.json({
		user_id: req.params.id,
		error: 0
	}))
	.post('/submit', () => new Response('Form submitted'));

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		ctx.passThroughOnException();
		try {
			// Handle request using router
			return await router.handle(request).catch(() => new Response('Route not found', { status: 500 }));
		} catch (e) {
			// Log the error for debugging
			console.error(e);
			// Return a 500 Internal Server Error response
			return new Response('Internal Server Error', { status: 500 });
		}
	},
};
