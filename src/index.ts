interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request, env): Promise<Response> {
		const url = new URL(request.url);
		if (url.pathname.startsWith('/random')) {
			let random = Math.floor(Math.random() * 5) + 1;
			let newurl = `https://peanuts.intelligencesystems.org/${random}.avif`;
			let modifiedRequest = new Request(newurl, request);
			console.log(modifiedRequest);
			return env.ASSETS.fetch(modifiedRequest);
		}
		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
