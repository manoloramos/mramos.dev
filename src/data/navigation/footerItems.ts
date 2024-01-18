/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 18-1-2024 23:19:54 
 *  Last modified on: 18-1-2024 23:43:25 
 * 
 *  Description: Defines the navigation elements for the Footer component.
 */

import { FooterLinks } from "@ts/enums/navigation";
import github from '@assets/icons/github_lm.svg';
import { navigationItems } from "@ts/interfaces/navigationItems";
import netlify from '@assets/icons/netlify_lm.svg';
import vite from '@assets/icons/vite.svg';

const footerNavItems: navigationItems[] = [
	{ url: FooterLinks.Vite, label: 'Vite', icon: vite},
	{ url: FooterLinks.Netlify ,label: 'Netlify', icon: netlify },
	{ url: FooterLinks.GitHub, label: 'GitHub', icon: github },
];

export default footerNavItems;