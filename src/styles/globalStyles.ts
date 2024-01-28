/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 11-1-2024 18:41:37 
 *  Last modified on: 28-1-2024 11:41:42 
 * 
 *  Description: Defines the global styles used by the App.
 */

import { css } from "@emotion/react";

const globalStyles = css`
	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		font-weight: 400;
	
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