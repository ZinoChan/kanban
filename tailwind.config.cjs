/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary1: '#CCB343',
				primary2: '#d1bb57',
				primary3: '#435ccc',
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
