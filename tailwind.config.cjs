/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary1: '#F2304D',
				light: '#F4F6F8',
				dark1: '#131217',
				dark2: '#191B1F',
				dark3: '#1C1E22',
				dark4: '#26272E'
			}
		}
	},
	plugins: []
};
