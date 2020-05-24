import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginContainer from '../screens/containers/LoginContainer';
import HomeContainer from '../screens/containers/HomeContainer';
import ArticleContainer from '../screens/containers/ArticleContainer';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);

  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="article"
        component={ArticleContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="menu"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth"
        component={LoginContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
