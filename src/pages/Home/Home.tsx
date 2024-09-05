/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 25-10-2023 20:04:05
 *  Last modified on: 5-9-2024 22:07:32 
 * 
 *  Description: Home page
 */

import Layout from "@/components/layout";
import React from "react";
import reactLogo from '@assets/icons/react.svg';
import viteLogo from '@assets/icons/vite.svg';

const Home: React.FC = () => {
	return (
		<Layout>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>

				<h2>Hello, world!</h2>
				<h3>Welcome to my personal website 👋🏻</h3>
				<h3>This site is being developed using Vite + React</h3>
			</div>
		</Layout>
	);
};

export default Home;