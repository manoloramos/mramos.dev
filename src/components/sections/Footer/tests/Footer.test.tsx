/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:57
 *  Last modified on: 27-11-2023 19:09:19 
 * 
 *  Description: Footer tests.
 */


import Footer from "../Footer";
import { render, waitFor } from "@testing-library/react";

describe('Footer component', () => {
	it('should render the component', () => {
		const footer = render(
			<Footer/>
		);

		waitFor(() => {
			expect(footer).toBeInTheDocument();
		});
	});
});