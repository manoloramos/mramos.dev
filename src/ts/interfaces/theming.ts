/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 15-1-2024 19:15:37 
 *  Last modified on: 28-1-2024 11:26:30 
 * 
 *  Description: Contains interfaces aimed to extend and assist theming features.
 */

import { Theme } from "@emotion/react";

interface ThemeCollection {
	light: ThemeProperties,
	dark: ThemeProperties
}
interface ThemeProperties extends Theme {
	colorScheme: 'light' | 'dark',
	general?: StyleRuleset,
	card?: StyleRuleset,
	button?: StyleRuleset,
	headingText?: StyleRuleset,
	baseText?: StyleRuleset,
	link?: StyleRuleset,
	border?: StyleRuleset,
}

interface StyleRuleset {
	background?: string,
	color?: string,
	colorMuted?: string,
	colorBright?: string,
	hover?: string
}

export type { ThemeCollection, ThemeProperties, StyleRuleset };