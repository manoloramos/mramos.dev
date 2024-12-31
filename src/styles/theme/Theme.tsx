/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 7-12-2023 20:11:13 
 *  Last modified on: 31-12-2024 16:50:33
 * 
 *  Description: Defines all the available themes for the App.
 */

import { ThemeCollection } from "@ts/interfaces/theming";

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
	},
	root: {
		maxWidth: '1200px'
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
	white: {
		'base': '#FFF'
	},
	gray: {
		'brighter': '#F8F9FA',
		'bright': '#f3f6f9',
		'border': '#DEE2E6',
		'borderHover': '#CED4DA',
		'base': '#495057',
		'dark': '#212529',
		'darker': '#242424'
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

export const theme: ThemeCollection = {
	light: {
		colorScheme: 'light',
		baseStyles: {
			background: colors.white.base
		},
		card: {
			background: colors.gray.brighter
		},
		button: {
			color: colors.gray.base,
			background: colors.gray.bright
		},
		headingText: {
			color: colors.gray.dark
		},
		baseText: {
			color: colors.gray.base
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
		baseStyles: {
			background: colors.gray.darker
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
			color: 'rgba(255, 255, 255, 0.87)'
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