/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 28-10-2023 15:14:24
 * 
 *  Description: App File
 */

import reactLogo from '@assets/icons/react.svg';
import viteLogo from '@assets/icons/vite.svg';
import '@styles/App.css';
import Container from '@components/layout';

const App: React.FC = () => {

	return (
		<Container>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>

				<h2>Hello World!</h2>
				<h3>This site is beign developed using React + Vite</h3>
			</div>
		</Container>
	)
};

export default App;
