/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:57
 *  Last modified on: 17-1-2024 21:34:44 
 * 
 *  Description: Footer component. Contains copyright, links & last build info.
 */

import { FooterLinks } from "@/ts/enums/navigation";
import React from "react";
import _ from "lodash";
import github from '@assets/icons/github_lm.svg';
import { navigationItems } from "@ts/interfaces/navigationItems";
import netlify from '@assets/icons/netlify_lm.svg';
import styles from "./Footer.styles";
import vite from '@assets/icons/vite.svg';

interface FooterProps {}

// TODO: move these navigationItems to a dedicated file.
const footerNavItems: navigationItems[] = [
	{ url: FooterLinks.Vite, label: 'Vite', icon: vite},
	{ url: FooterLinks.Netlify ,label: 'Netlify', icon: netlify },
	{ url: FooterLinks.GitHub, label: 'GitHub', icon: github },
];

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer css={{...styles.footer}}>
			<section css={{...styles.section}}>
				<div>
					<span>Made with <u>♥</u> by <abbr title="💽 Last built on: 29-11-2023 17:52">Manolo Ramos</abbr></span>
				</div>
			</section>
			<section css={{...styles.section}}>
				<nav css={{...styles.links}}>
					{
						_.map(footerNavItems, (item, key) => (
							<a
								key={key}
								href={item.url}
								title={item.label}
								target="_blank"
								rel="noopener noreferrer">
								<img 
									src={item.icon}
									alt={item.label}
								/>
								<span>{item.label}</span>
							</a>
						))
					}
				</nav>
			</section>
		</footer>
	);
};

export default Footer;