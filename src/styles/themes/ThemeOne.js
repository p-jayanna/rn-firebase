import {sharedStyle} from '../typography/sizes';

export const colors = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  background: '#E0E0E0',
  surface: '#FFFFFF',
  onPrimary: '#FFFFFF',
  onSecondary: '#000000',
  onBackground: '#000000',
  onSurface: '#000000',
  onSurfaceVariant: '#757575',
  onError: '#FFFFFF',
  info: '#00529B',
  error: '#D8000C',
  warning: '#9F6000',
  success: '#4F8A10',
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
