/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:52
 * @ Last modified on: 13-11-2023 17:35:13
 * 
 *  Description: Header component. Contains the main navigation elements and the light/dark toggle.
 */

import { NavPaths } from '@/ts/enums/navigationPaths';
import React from 'react';
import _ from 'lodash';
import externalLink from '@assets/icons/external_link.svg';
import logo from '@assets/images/logo/logo_sm.png';
import { navigationItems } from '@ts/interfaces/navigationItems';
import styles from './Header.styles';

interface HeaderProps {
	themeSwitch: () => void;
}

const Header: React.FC<HeaderProps> = ({
	themeSwitch
}) => {
	
	const mainNavItems: navigationItems[] = [
		{ url: NavPaths.About, label: 'About me' },
		{ url: NavPaths.Blog ,label: 'Blog' },
		{ url: NavPaths.Portfolio, label: 'Portfolio' }
	];

	const externalNavItems: navigationItems[] = [
		{ url: NavPaths.GitHub, label: 'GitHub', icon: externalLink }
	];
	
	return (
		<header css={styles.header}>
			<div css={styles.headerContainer}>
				<div css={styles.navbarContainer}>
					<a href={NavPaths.Home}>
						<img src={logo} alt="Logo"/>
						<span>Manolo Ramos</span>
					</a>
					<nav>
						{
							_.map(mainNavItems, (item, key) => (
								<div key={key}>
									<a href={item.url}>
										<span>{item.label}</span>
									</a>
								</div>
							))
						}
						
						{
							_.map(externalNavItems, (item, key) => (
								<div key={key}>
									<a 
										href={item.url}
										target='_blank'
										rel='noreferrer'
									>
										<span>{item.label}</span>
										{ item.icon &&
											<img 
												src={item.icon} 
												alt="Nav item icon"
											/>
										}
									</a>
								</div>
							))
						}
					</nav>
				</div>
				<div css={styles.themeButtonContainer}>
					<button onClick={themeSwitch}>
						<img src="#" alt="Theme switch" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;