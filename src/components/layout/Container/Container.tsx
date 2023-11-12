/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:20:11
 *  Last modified on: 12-11-2023 19:51:35
 * 
 *  Description: App Container component
 */


import React from "react";
import { Footer, Header } from "@/components/sections";

interface ContainerProps {
	children: React.ReactElement | React.ReactElement[]
}

const Container: React.FC<ContainerProps> = ({
	children
}) => {
	return (
		<>
			<Header themeSwitch={() => {}}/>
			{children}
			<Footer />
		</>
	);
};

export default Container;