/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 28-10-2023 15:15:11
 * 
 *  Description: Renders the Application in the DOM.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
