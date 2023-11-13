/**
 * Project: manoloramos.dev
 * Author: Manolo Ramos
 * Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 * File created on: 06-11-2023 12:49:52
 * @ Last modified on: 13-11-2023 17:44:40
 * 
 * Description: Header component styles.
 */

const styles = {
	header: {
		width: '100%',
		height: '60px',
		position: 'fixed' as const,
		left: '0',
		top: '0',
		display: 'flex',
		flexFlow: 'row nowrap',
		background: 'transparent',
		borderBottom: '1px solid gray',
		zIndex: '3',
		'@media screen and (min-width: 700px)': {
			height: '80px',
			position: 'static' as const,
			borderBottom: 'none'
		}
	},
	headerContainer: {
		width: '100%',
		padding: '0 2rem',
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		'@media screen and (min-width: 700px)': {
			display: 'flex',
			padding: '0'
		}
	},
	navbarContainer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		'& > a': {
			display: 'none',
			alignItems: 'center',
			gap: '0.25rem',
			marginBottom: '1.25rem',
			'& img': {
				height: '2.5rem',
				width: '2.5rem',
				maxHeight: '2.5rem',
				maxWidth: '2.5rem'
			},
			'@media screen and (min-width: 700px)': {
				display: 'flex',
			}
		},
		'& > nav': {
			display: 'flex',
			flexFlow: 'row nowrap',
			gap: '2rem',
			'& a img': {
				height: '0.75rem',
				paddingLeft: '0.5rem'
			}
		}
	},
	themeButtonContainer: {

	}
};

export default styles;
