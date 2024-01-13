/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:52
 *  Last modified on: 12-1-2024 10:40:24 
 * 
 *  Description: Header component styles.
 */

import { colors } from "@theme";

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
		gap: '2rem',
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
			fontWeight: '700',
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
			alignItems: 'center',
			flexFlow: 'row nowrap',
			gap: '2rem',
			'& a': {
				border: '2px solid transparent',
				borderLeft: 'none',
				borderRight: 'none',
				borderRadius: '0',
				fontWeight: '600',
				whiteSpace: 'nowrap' as const,
				paddingBottom: '0.15rem',
			},
			'& a:hover': {
				color: colors.gray[0],
				borderBottom: '2px solid skyblue'
			},
			'& div:last-child a': {
				display: 'flex',
				alignItems: 'center'
			},
			'& a img': {
				height: '0.75rem',
				paddingLeft: '0.5rem',
				filter: 'invert(33%)'
			}
		}
	},
	themeButtonContainer: {
		'@media screen and (min-width: 700px)': {
			alignSelf: 'flex-start'
		}
	}
};

export default styles;
