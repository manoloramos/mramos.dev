/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 25-10-2023 20:05:07
 *  Last modified on: 01-11-2023 13:47:01
 * 
 *  Description: Test file for the Home page.
 */

import '@testing-library/jest-dom';
import { render, waitFor } from "@testing-library/react";
import Home from "../Home";

describe('Home page', () => {
	it('should render the page',() => {
		const home = render(
			<Home />
		);

		waitFor(() => {
			expect(home).toBeInTheDocument();
		});
	});
});