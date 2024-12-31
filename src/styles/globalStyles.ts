/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 11-1-2024 18:41:37 
 *  Last modified on: 31-12-2024 16:48:39
 * 
 *  Description: Defines the global styles used by the App. 
 *  Theme integration is also present here.
 */

import { ThemeProperties } from '@/ts/interfaces/theming';
import { css } from '@emotion/react';

const globalStyles = (theme: ThemeProperties) => css`
	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	
		color-scheme: light dark;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}
	
	#root {
		isolation: isolate;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	body {
		min-height: 100vh;
		min-width: 320px;
		background: ${theme.baseStyles!.background};
		margin: 0;
		line-height: 1.5;
		display: flex;
		place-items: center;
		overflow-x: hidden;
		text-rendering: optimizeSpeed;
		scroll-behavior: smooth;
		font-synthesis: none;
	}

	img, video {
		height: auto;
		max-width: 100%;
	}
`;

export default globalStyles;