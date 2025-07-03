import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/containe-test/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: `@use "./src/scss/_style.scss" as *;`,
	// 		},
	// 	},
	// },
});
