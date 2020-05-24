import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import HomeStack from './home/HomeStack';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);

  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen name="home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
