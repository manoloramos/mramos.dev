/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:20:11
 *  Last modified on: 10-1-2024 23:56:10 
 * 
 *  Description: Layout component, served as the principal container for the App.
 */

import styles from './Layout.styles';

interface LayoutProps {
	children: React.ReactElement | React.ReactElement[]
}

const Layout: React.FC<LayoutProps> = ({
	children
}) => {
	return (
		<main css={styles.main}>
			{children}
		</main>
	);
};

export default Layout;