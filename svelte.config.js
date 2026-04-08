import adapter from '@sveltejs/adapter-static';

const repoName = 'electiva-2.0';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: isGitHubActions ? `/${repoName}` : ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
