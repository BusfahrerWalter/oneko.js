import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [{
				src: 'oneko.gif',
				dest: '.'
			}, {
				src: 'types.d.ts',
				dest: '.'
			}]
		})
	],
	build: {
		lib: {
			entry: [
				'oneko.js',
				'oneko-ie6.js',
				'oneko-webring.js'
			],
			formats: ['es', 'cjs']
		},
		minify: false,
		sourcemap: false,
		emptyOutDir: true
	}
});