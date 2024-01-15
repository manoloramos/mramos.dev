/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 15-1-2024 19:37:00 
 *  Last modified on: 15-1-2024 20:24:00 
 * 
 *  Description: This hook provides functionality aimed to simplify the style overriding proccess when any theme properties are used in a component.
 */

import { CSSObject } from '@emotion/react';
import { ThemeProperties } from '@/ts/interfaces/theme';
import { useTheme } from '@emotion/react';

const useMixTheme = (componentStyles: object, themeProperty: keyof ThemeProperties): CSSObject => {
  const theme = useTheme() as ThemeProperties;
  return {
    ...componentStyles,
    background: theme[themeProperty],
  };
};

export default useMixTheme;