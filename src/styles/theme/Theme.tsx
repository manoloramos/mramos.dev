/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 7-12-2023 20:11:13 
 *  Last modified on: 11-1-2024 00:13:14 
 * 
 *  Description: Defines all the available themes for the App.
 */

export const theme = {
	light: {
		background: '1',
		cardBackground: '',
		buttonBackground: '',
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
		buttonBackground: '',
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
	body: {
		margin: '0',
		display: 'flex',
		placeItems: 'center',
		minWidth: '320px',
		minHeight: '100vh',
		overflowX: 'hidden'
	},
	root: {
		maxWidth: '1200px',
		width: '100%',
		margin: '0 auto',
		padding: '2rem',
		textAlign: 'center'
	},
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