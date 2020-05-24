import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);

  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen name="home" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
