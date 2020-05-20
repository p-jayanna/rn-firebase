import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {NavigationContainer} from '@react-navigation/native';
import themeConfig from './src/config/theme-config';
import {themeTwo} from './src/styles/themes/ThemeTwo';
import {themeOne} from './src/styles/themes/ThemeOne';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import StyleContext, {currentTheme} from './src/styles/themes/StyleContext';
import {StyleProvider, Root, Container} from 'native-base';
import {store, persistor} from './src/store';
import BrandProvider from './src/styles/BrandSettings';
import getTheme from './native-base-theme/components';
import AppNavigator from './src/navigation/AppNavigator';
import {i18nConfig} from './src/config/i18n-config';
import {configureApiClient} from './src/config/api-config';
import {enableScreens} from 'react-native-screens';

//configure api calls using axios package
configureApiClient();

//to support react navigation
enableScreens();

class componentName extends PureComponent {
  constructor(props) {
    super(props);
    i18nConfig();
    const brandStyle = themeOne;
    const nativeBaseTheme = themeConfig(brandStyle);
    this.state = {nativeBaseTheme, brandStyle};
  }

  async componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange());
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange());
  }

  handleLocalizationChange = () => {
    i18nConfig();
    this.forceUpdate();
  };

  render() {
    const {nativeBaseTheme, brandStyle} = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleContext.Provider value={brandStyle}>
            <BrandProvider settings={{brandStyle, colorScheme: currentTheme}}>
              <StyleProvider style={getTheme(nativeBaseTheme)}>
                <Root>
                  <Container>
                    <NavigationContainer>
                      <StatusBar
                        backgroundColor={brandStyle.colors[currentTheme].header}
                      />
                      <AppNavigator />
                    </NavigationContainer>
                  </Container>
                </Root>
              </StyleProvider>
            </BrandProvider>
          </StyleContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}

export default componentName;
