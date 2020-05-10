import {sharedStyle} from '../typography/sizes';

export const colors = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#B00020',
  onPrimary: '#FFFFFF',
  onSecondary: '#000000',
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#FFFFFF',
};

export const themeMode = {
  light: colors,
};

export const typography = {
  fontFamily: 'Roboto-Regular',
  fontFamilyBold: 'Roboto-Bold',
  fontFamilyItalic: 'Roboto-Italic',
};

export const themeOne = {
  colors: themeMode,
  typography: typography,
  sharedStyle: sharedStyle,
};
