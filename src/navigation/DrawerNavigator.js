import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserContainer from '../screens/containers/UserContainer';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="UserProfile" component={UserContainer} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
