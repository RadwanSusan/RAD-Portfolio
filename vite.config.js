import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import mkcert from 'vite-plugin-mkcert';
import { qrcode } from 'vite-plugin-qrcode';
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
		mkcert(),
		qrcode(),
		svgr(),
	],
});
