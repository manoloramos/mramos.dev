/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:52
 *  Last modified on: 09-11-2023 23:33:46
 * 
 *  Description: Header component. Contains the main navigation elements and the light/dark toggle.
 */

import React from "react";

interface HeaderProps {
	navElements: string
}

const Header: React.FC<HeaderProps> = () => {
	return(
		<header className="navbar">
			<div className="navbar-container">
				<div>
					<a href="#">
						<img src="" alt="" />
					</a>
					<nav></nav>
				</div>
				<div>
					<button>
						<img src="" alt="" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;