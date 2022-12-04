/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@skeletonlabs/skeleton/tailwind/theme.cjs')
	],
}
