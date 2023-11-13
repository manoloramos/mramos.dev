/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:57:11
 *  Last modified on: 13-11-2023 16:43:21
 * 
 *  Description: Test file for the Layout component.
 */

import Layout from "../Layout";
import { render, waitFor } from "@testing-library/react";

describe('Layout component', () => {
	it('should render the component',() => {
		const layout = render(
			<Layout>
				<span>Test</span>
			</Layout>
		);

		waitFor(() => {
			expect(layout).toBeInTheDocument();
		});
	});
});