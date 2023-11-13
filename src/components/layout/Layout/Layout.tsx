/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:20:11
 *  Last modified on: 13-11-2023 16:49:28
 * 
 *  Description: Layout component, served as the principal container for the App.
 */

import React from "react";
import styles from "./Layout.styles";
import { Footer, Header } from "@/components/sections";

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[]
}

const Layout: React.FC<LayoutProps> = ({
	children
}) => {
	return (
		<div css={styles.layout}>
			<Header themeSwitch={() => {}}/>
			<main css={styles.main}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;