/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:57:11
 *  Last modified on: 01-11-2023 13:44:52
 * 
 *  Description: Test file for the Container component.
 */

import { render, waitFor } from "@testing-library/react";
import Container from "../Container";

describe('Container component', () => {
	it('should render the component',() => {
		const container = render(
			<Container>
				<span>Test</span>
			</Container>
		);

		waitFor(() => {
			expect(container).toBeInTheDocument();
		});
	});
});