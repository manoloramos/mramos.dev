/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:52
 *  Last modified on: 27-11-2023 19:04:41 
 * 
 *  Description: Header tests.
 */

import Header from "../Header";
import { render, waitFor } from "@testing-library/react";

const themeSwitch = jest.fn();

describe('Header component', () => {
	it('should render the component', () => {
		const header = render(
			<Header themeSwitch={themeSwitch}/>
		);

		waitFor(() => {
			expect(header).toBeInTheDocument();
		});
	});
	
	it.skip('should succesfully toggle from light to dark theme', () => {
		
	});
});