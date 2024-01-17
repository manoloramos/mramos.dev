/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 17-1-2024 21:49:53 
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
	const [selectedTheme, setSelectedTheme] = useState(light);

	const themeSwitch = () => {
		setSelectedTheme(selectedTheme === light ? dark : light);
	};

	return (
		<>
			<Global styles={globalStyles}/>
			<ThemeProvider theme={selectedTheme}>
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
