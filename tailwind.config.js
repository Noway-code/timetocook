/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
		"./src/services/**/*.{js,ts,jsx,tsx,mdx,css}",
	],
	theme: {
		extend: {
			height: {
				'120': '30rem', // 120 for 30rem (480px)
				'144': '36rem', // 144 for 36rem (576px)
				'160': '40rem', // 160 for 40rem (640px)
			},
			maxHeight: {
				'100': '26rem', // 120 for 30rem (480px)
				'120': '30rem', // 120 for 30rem (480px)
				'144': '36rem', // 144 for 36rem (576px)
				'160': '40rem', // 160 for 40rem (640px)
			},
			keyframes: {
				fadeIn: {
					'0%': {opacity: 0},
					'100%': {opacity: 1},
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
