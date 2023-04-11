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

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	main: KVNamespace;
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

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		if (request.url.match('openai')) {
			const apiKey = await env.main.get('api-key') ?? '';
			let text = await request.text();
			const text2 = request.url.split('/').pop();
			if (text2 !== 'openai') {
				text = text + text2;
			}
			const result = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				body: JSON.stringify({
					"model": "gpt-3.5-turbo",
					"messages": [{ "role": "user", "content": text }]
				})
				, headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json'
				}
			})
			const resultJSON: any = await result.json();
			const resultText = resultJSON.choices[0].message.content;
			return new Response(resultText);
		}
		else {
			return new Response("Hello World!");
		}

	},
};
