/**
 * Project: manoloramos.dev
 * Author: Manolo Ramos
 * Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 * File created on: 24-10-2023 12:49:20
 * Last modified on: 17-1-2024 21:47:32 
 * 
 * Description: Vite config file
 */

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages/index'),
			'@services': path.resolve(__dirname, './src/services'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@theme': path.resolve(__dirname, './src/styles/theme/Theme'),
			'@types': path.resolve(__dirname, './src/types'),
			'@utils': path.resolve(__dirname, './src/utils'),
		}
	}
});
