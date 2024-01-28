/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 7-12-2023 20:11:13 
 *  Last modified on: 28-1-2024 11:05:23 
 * 
 *  Description: Defines all the available themes for the App.
 */

import { ThemeCollection } from "@ts/interfaces/theming";

export const theme: ThemeCollection = {
	light: {
		colorScheme: 'light',
		general: {
			background: ''
		},
		card: {
			background: ''
		},
		button: {
			background: ''
		},
		headingText: {
			color: ''
		},
		baseText: {
			color: ''
		},
		link: {
			color: '',
			hover: ''
		},
		border: {
			color: '',
			hover: ''
		}
	},
	dark: {
		colorScheme: 'dark',
		general: {
			background: ''
		},
		card: {
			background: ''
		},
		button: {
			background: ''
		},
		headingText: {
			color: ''
		},
		baseText: {
			color: ''
		},
		link: {
			color: '',
			hover: ''
		},
		border: {
			color: '',
			hover: ''
		}
	}
};

export const general = {
	borders: {
		radius: '',
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