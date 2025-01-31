/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 15-1-2024 19:37:00 
 *  Last modified on: 31-12-2024 16:36:46
 * 
 *  Description: This hook provides functionality aimed to simplify the style overriding proccess whenever any theme properties are used in a component. The themeProperty parameter is by default an empty object, but it can be used to pass any theme property to the component.
 */

import { CSSObject } from '@emotion/react';
import { StyleRuleset } from '@/ts/interfaces/theming';

const useMixTheme = (componentStyles: object, themeProperty: StyleRuleset = {}): CSSObject => {
	const mixedStyles = { ...componentStyles, ...themeProperty };
	return mixedStyles;
};

export default useMixTheme;