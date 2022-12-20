/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary1: '#ffca05',
				primary2: '#f7cf3b',
				primary3: '#3f3f75',
				light: '#F4F6F8',
				dark1: '#1C1C1E',
				dark2: '#161819',
				dark3: '#212124',
				dark4: '#1C1E22'
			}
		}
	},
	plugins: []
};
