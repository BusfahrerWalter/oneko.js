import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [{
				src: 'assets/oneko.gif',
				dest: '.'
			}, {
				src: 'src/types.d.ts',
				dest: '.'
			}]
		})
	],
	build: {
		lib: {
			entry: [
				'src/oneko.js',
				'src/oneko-ie6.js',
				'src/oneko-webring.js'
			],
			formats: ['es', 'cjs']
		},
		minify: false,
		sourcemap: false,
		emptyOutDir: true
	}
});