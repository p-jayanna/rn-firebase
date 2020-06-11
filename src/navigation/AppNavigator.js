import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeStack from './home/HomeStack';
import LoginContainer from '../screens/containers/LoginContainer';
import AppDrawerContent from './drawer/AppDrawerContent';
import {withBrandSettings} from '../styles/withBrandSettings';
import LoadingContainer from '../screens/containers/LoadingContainer';

const Drawer = createDrawerNavigator();

const AppNavigator = styleProps => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);
  const {colors} = styleProps;

  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      drawerContent={props => <AppDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: () => (
            <Icon size={20} name={'home'} color={colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Welcome"
        component={LoadingContainer}
        options={{
          drawerIcon: () => (
            <Icon size={20} name={'android'} color={colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={HomeStack}
        options={{
          drawerIcon: () => (
            <Icon size={20} name={'sign-out'} color={colors.primary} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default withBrandSettings(AppNavigator);
