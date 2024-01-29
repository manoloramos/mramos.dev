/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 29-1-2024 12:49:26 
 * 
 *  Description: Main App File
 */

import { Global } from '@emotion/react';
import Home from '@pages';
import { ThemeProvider } from '@emotion/react';
import globalStyles from '@styles/globalStyles';
import { useState } from 'react';
import { Footer, Header } from '@components/sections';
import { structure, theme } from '@theme';
import '@styles/App.css';

const App: React.FC = () => {
	const { light, dark } = theme;
	const [currentTheme, setCurrentTheme] = useState(light);

	const themeSwitch = () => {
		setCurrentTheme(currentTheme === light ? dark : light);
	};

	return (
		<>
			<Global styles={globalStyles(currentTheme)}/>
			<ThemeProvider theme={currentTheme}>
				<div css={structure.app}>
					<Header themeSwitch={themeSwitch}/>
						<Home />
					<Footer />
				</div>
			</ThemeProvider>
		</>
	);
};

export default App;
