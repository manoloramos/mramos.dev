/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 18-1-2024 23:19:42 
 *  Last modified on: 18-1-2024 23:21:13 
 * 
 *  Description: Navigation items.
 */

import { NavPaths } from "@ts/enums/navigation";
import externalLink from '@assets/icons/external_link.svg';
import { navigationItems } from "@ts/interfaces/navigationItems";

const mainNavItems: navigationItems[] = [
	{ url: NavPaths.About, label: 'About me' },
	{ url: NavPaths.Blog ,label: 'Blog' },
	{ url: NavPaths.Portfolio, label: 'Portfolio' }
];

const externalNavItems: navigationItems[] = [
	{ url: NavPaths.GitHub, label: 'GitHub', icon: externalLink }
];

export { externalNavItems, mainNavItems };