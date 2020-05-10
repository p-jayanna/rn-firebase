import React from 'react';
import {themeOne} from './themes/ThemeOne';

export const BrandContext = React.createContext({
  brandStyle: themeOne,
  colorScheme: 'light',
  colors: themeOne.colors.light,
});

export class BrandProvider extends React.Component {
  getSettings = settings => {
    return {
      colors:
        settings.brandStyle.colors.light[settings.colorScheme] ||
        settings.brandStyle.colors.light,
      ...settings,
    };
  };

  render() {
    const {settings} = this.props;
    return (
      <BrandContext.Provider value={this.getSettings(settings)}>
        {this.props.children}
      </BrandContext.Provider>
    );
  }
}

export default BrandProvider;
