/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 7-12-2023 20:11:13 
 *  Last modified on: 15-1-2024 20:50:20 
 * 
 *  Description: Defines all the available themes for the App.
 */

import { ThemeCollection } from "@/ts/interfaces/theme";

export const theme: ThemeCollection = {
	light: {
		background: '',
		cardBackground: '',
		buttonBackground: 'red',
		headingText: '',
		baseText: '',
		baseTextMuted: '',
		baseTextBright: '',
		link: '',
		linkHover: '',
		border: '',
		borderHover: ''
	},
	dark: {
		background: '',
		cardBackground: '',
		buttonBackground: 'blue',
		headingText: '',
		baseText: '',
		baseTextMuted: '',
		baseTextBright: '',
		link: '',
		linkHover: '',
		border: '',
		borderHover: ''
	}
};

export const general = {
	borders: {
		radius: '4px',
		color: '',
		hover: ''
	}
};

export const structure = {
	app: {
		minHeight: '100vh',
		display: 'flex',
		flexFlow: 'column nowrap'
	}
};

export const breakpoints = {
	sm: '560px',
	md: '700px',
	xl: '1160px'
};

export const fontSizes = {
	base: '16px',
	h1: '2rem',
	h2: '1.8rem',
	h3: '1.6rem',
	h4: '1.5rem'
};

export const colors = {
	red: {
		
	},
	green: {

	},
	blue: {

	},
	gray: {
		'0': '#f8f9fa'
	},
	misc: {
		indigo: ''
	}
};

export const fonts = {
	base: '',
	heading: '',
	monospace: '',
};