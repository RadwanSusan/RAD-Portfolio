import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import { imagetools } from 'vite-imagetools';
import mkcert from 'vite-plugin-mkcert';
import { qrcode } from 'vite-plugin-qrcode';
import imagePlaceholder from 'vite-plugin-image-placeholder';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
	server: {
		https: true,
	},
	plugins: [
		react(),
		webfontDownload(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		imagetools(),
		mkcert(),
		qrcode(),
		imagePlaceholder({
			prefix: 'image/placeholder',
		}),
		svgr(),
	],
});
