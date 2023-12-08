/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 8-12-2023 11:45:39 
 * 
 *  Description: Renders the Application in the DOM.
 */

import App from '@/App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
