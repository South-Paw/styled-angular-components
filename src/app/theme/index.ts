// Based on https://system-ui.com/theme

import deepmerge from 'deepmerge';

interface ThemeColors {
  white: string;
  black: string;
  primary: string;
  secondary: string;
}

const colors: ThemeColors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#0052cc',
  secondary: '#172b4d',
};

interface ThemeSpaces {
  none: number;
  tiny: number;
  small: number;
  base: number;
  medium: number;
  large: number;
}

const spaces: ThemeSpaces = {
  none: 0,
  tiny: 4,
  small: 8,
  base: 16,
  medium: 24,
  large: 32,
};

interface ThemeFonts {
  base: string;
  mono: string;
}

const fonts: ThemeFonts = {
  base: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  mono: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
};

interface ThemeFontSizes {
  tiny: number;
  small: number;
  base: number;
  medium: number;
  large: number;
  huge: number;
}

const fontSizes: ThemeFontSizes = {
  tiny: 12,
  small: 14,
  base: 16,
  medium: 20,
  large: 24,
  huge: 32,
};

interface ThemeFontWeights {}

const fontWeights: ThemeFontWeights = {};

interface ThemeLineHeights {}

const lineHeights: ThemeLineHeights = {};

interface ThemeLetterSpacings {}

const letterSpacings: ThemeLetterSpacings = {};

interface ThemeSizes {}

const sizes: ThemeSizes = {};

interface ThemeBorders {}

const borders: ThemeBorders = {};

interface ThemeBorderWidths {}

const borderWidths: ThemeBorderWidths = {};

interface ThemeBorderStyles {}

const borderStyles: ThemeBorderStyles = {};

interface ThemeRadii {}

const radii: ThemeRadii = {};

interface ThemeShadows {}

const shadows: ThemeShadows = {};

interface ThemeZIndices {}

const zIndices: ThemeZIndices = {};

export interface Theme {
  colors: ThemeColors;
  spaces: ThemeSpaces;
  fonts: ThemeFonts;
  fontSizes: ThemeFontSizes;
  fontWeights: ThemeFontWeights;
  lineHeights: ThemeLineHeights;
  letterSpacings: ThemeLetterSpacings;
  sizes: ThemeSizes;
  borders: ThemeBorders;
  borderWidths: ThemeBorderWidths;
  borderStyles: ThemeBorderStyles;
  radii: ThemeRadii;
  shadows: ThemeShadows;
  zIndices: ThemeZIndices;
}

const base: Theme = {
  colors,
  spaces,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  sizes,
  borders,
  borderWidths,
  borderStyles,
  radii,
  shadows,
  zIndices,
};

export const blueTheme: Theme = deepmerge(base, {
  /* no changes to light theme */
});

export const greenTheme: Theme = deepmerge(base, {
  colors: {
    primary: '#00875A',
    secondary: '#6b778c',
  },
});
