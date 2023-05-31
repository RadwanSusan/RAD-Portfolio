import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
import imagemin from 'unplugin-imagemin/vite';
import banner from 'vite-plugin-banner';
import progress from 'vite-plugin-progress';

export default defineConfig({
	plugins: [
		react(),
		webfontDownload(),
		progress(),
		imagemin({
			mode: 'sharp',
			compress: {
				jpg: {
					quality: 70,
				},
				jpeg: {
					quality: 70,
				},
				png: {
					quality: 70,
				},
				webp: {
					quality: 70,
				},
			},
			conversion: [{ from: 'jpeg', to: 'webp' }],
		}),
		banner(`
    ██   ██         ███████   ██      ██ ████████   ██    ██   ███████   ██     ██
    ░██  ░██        ██░░░░░██ ░██     ░██░██░░░░░   ░░██  ██   ██░░░░░██ ░██    ░██
    ░██  ░██       ██     ░░██░██     ░██░██         ░░████   ██     ░░██░██    ░██
    ░██  ░██      ░██      ░██░░██    ██ ░███████     ░░██   ░██      ░██░██    ░██
    ░██  ░██      ░██      ░██ ░░██  ██  ░██░░░░       ░██   ░██      ░██░██    ░██
    ░██  ░██      ░░██     ██   ░░████   ░██           ░██   ░░██     ██ ░██    ░██
    ░██  ░████████ ░░███████     ░░██    ░████████     ░██    ░░███████  ░░███████
    ░░   ░░░░░░░░   ░░░░░░░       ░░     ░░░░░░░░      ░░      ░░░░░░░    ░░░░░░░
    `),
	],
});
