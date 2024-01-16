/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 15-1-2024 19:15:37 
 *  Last modified on: 16-1-2024 22:48:54 
 * 
 *  Description: Contains interfaces aimed to extend and assist theming features.
 */

import { Theme } from "@emotion/react";

interface ThemeCollection {
	light: ThemeProperties,
	dark: ThemeProperties
}
interface ThemeProperties extends Theme {
	background?: string,
	cardBackground?: string,
	buttonBackground?: string,
	headingText?: string,
	baseText?: string,
	baseTextMuted?: string,
	baseTextBright?: string,
	link?: StyleRuleset | string,
	linkHover?: string,
	border?: string,
	borderHover?: string
}

interface StyleRuleset {
	background?: string,
	color?: string
}

export type { ThemeCollection, ThemeProperties };