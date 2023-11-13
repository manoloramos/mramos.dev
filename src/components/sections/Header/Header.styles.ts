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
		display: 'flex',
		flexFlow: 'row nowrap'
	},
	headerContainer: {
		width: '100%',
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	navbarContainer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		'& > a': {
			display: 'flex',
			alignItems: 'center',
			gap: '0.25rem',
			marginBottom: '1.25rem',
			'& img': {
				height: '2.5rem',
				width: '2.5rem',
				maxHeight: '2.5rem',
				maxWidth: '2.5rem'
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
