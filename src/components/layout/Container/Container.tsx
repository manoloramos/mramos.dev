/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:20:11
 *  Last modified on: 28-10-2023 15:02:32
 * 
 *  Description: App Container component
 */

import React from "react";

interface ContainerProps {
	children: React.ReactElement
}

const Container: React.FC<ContainerProps> = ({
	children
}) => {
	return(
		<>
			{children}
		</>
	);
};

export default Container;