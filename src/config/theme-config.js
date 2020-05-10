import nativeBaseTheme from '../../native-base-theme/variables/platform';

const themeConfig = themeStyle => {
  nativeBaseTheme.fontFamily = themeStyle.typography.fontFamily;
  return nativeBaseTheme;
};

export default themeConfig;
