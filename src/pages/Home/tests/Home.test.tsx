/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 25-10-2023 20:05:07
 *  Last modified on: 31-10-2023 13:40:00
 * 
 *  Description: Home page tests
 */

import { render } from "@testing-library/react";
import Home from "../Home";

describe('Home page', () => {
	it('should render the page',() => {
		const homePage = render(
			<Home />
		);

		expect(homePage).toBeInTheDocument();
	});
});