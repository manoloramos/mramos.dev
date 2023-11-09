/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:57
 *  Last modified on: 09-11-2023 23:33:28
 * 
 *  Description: Footer component. Contains copyright, links & last build info.
 */

import React from "react";

interface FooterProps {
	
}

const Footer: React.FC<FooterProps> = () => {
	return(
		<footer className="footer">
			<section>
				<nav></nav>
				<nav>
					<ul>
						<li></li>
					</ul>
				</nav>
				<time></time>
			</section>
		</footer>
	);
};

export default Footer;