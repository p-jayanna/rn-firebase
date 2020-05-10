import {sharedStyle} from '../typography/sizes';

export const colors = {
  primary: '#E65100',
  primaryVariant: '#FF6D00',
  secondary: '#01579B',
  secondaryVariant: '#0288D1',
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

export const themeTwo = {
  colors: themeMode,
  typography: typography,
  sharedStyle: sharedStyle,
};
