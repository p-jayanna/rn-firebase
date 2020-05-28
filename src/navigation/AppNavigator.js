import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import HomeStack from './home/HomeStack';
import LoginContainer from '../screens/containers/LoginContainer';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);

  return (
    <Drawer.Navigator initialRouteName="welcome">
      <Drawer.Screen name="home" component={HomeStack} />
      <Drawer.Screen name="welcome" component={LoginContainer} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
