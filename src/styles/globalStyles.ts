/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 11-1-2024 18:41:37 
 *  Last modified on: 14-1-2024 19:39:39 
 * 
 *  Description: Defines the global styles used by the App.
 */

import { css } from "@emotion/react";

const globalStyles = css`
	:root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;
	
		color-scheme: light dark;
		color: rgba(255, 255, 255, 0.87);
		background-color: #242424;
	
		font-synthesis: none;
		text-rendering: optimizeLegibility;
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
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	body {
		margin: 0;
		display: flex;
		place-items: center;
		min-width: 320px;
		min-height: 100vh;
		overflow-x: hidden;
	}
`;

export default globalStyles;