/**
 * Project: manoloramos.dev
 * Author: Manolo Ramos
 * Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 * File created on: 06-11-2023 12:49:57
 * @ Last modified on: 12-11-2023 20:48:16
 * 
 * Description: Footer styles.
 */

const styles = {
	footer: {
		padding: '3rem 0',
		height: '5rem',
		display: 'flex',
		flex: '1 1 auto',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		gap: '1.5rem'
	},
	section: {
		display: 'flex',
		alignItems: 'center',
		'& u': {
			padding:' 0 0.15rem',
			color: '#e12e2e',
			textDecoration: 'none'
		}
	},
	links: {
		display: 'flex',
		justifyContent: 'space-around',
		gap: '2rem',
		'& span': {
			padding: '0 0.5rem',
		},
		'& a': {
			display: 'flex',
			alignItems: 'center',
			lineHeight: '1.25rem',
			'& img': {
				display: 'inline-block',
				maxHeight: '1.25rem',
				width: 'auto'
			},
		},
	}
};

export default styles;
