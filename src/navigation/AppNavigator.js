import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import LoginContainer from '../screens/containers/LoginContainer';
import HomeContainer from '../screens/containers/HomeContainer';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);

  return (
    <AppStack.Navigator>
      {isAuthenticated ? (
        <AppStack.Screen
          name="home"
          component={HomeContainer}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AppStack.Screen
          name="auth"
          component={LoginContainer}
          options={{
            headerShown: false,
          }}
        />
      )}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
