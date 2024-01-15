/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 15-1-2024 19:15:37 
 *  Last modified on: 15-1-2024 19:24:58 
 * 
 *  Description: Contains interfaces aimed to extend and assist theming features.
 */

import { Theme } from "@emotion/react";

interface ThemedProperties extends Theme {
	background?: string,
	cardBackground?: string,
	buttonBackground?: string,
	headingText?: string,
	baseText?: string,
	baseTextMuted?: string,
	baseTextBright?: string,
	link?: string,
	linkHover?: string,
	border?: string,
	borderHover?: string
}

export type { ThemedProperties };