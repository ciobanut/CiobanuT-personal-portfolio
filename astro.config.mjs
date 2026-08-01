import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import favicons from 'astro-favicons'

export default defineConfig({
	site: 'https://learning-astro-908653.netlify.app/',
	prefetch: {
		prefetchAll: true
	},
	compressHTML: import.meta.env.PROD,
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		icon(),
		favicons({
			input: 'src/assets/favicon.svg',
			name: 'CiobanuT',
			short_name: 'CiobanuT',
			lang: 'en-US',
			start_url: '/',
			background: '#fff',
			theme_color: '#fff',
			pixel_art: false,
			manifestMaskable: true
		})
	]
})
