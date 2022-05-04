module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
			  'hero': "url('/assets/image1.jpg')",
			  'footer': "url('/img/footer-texture.png')",
			}
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
	  ],
}
