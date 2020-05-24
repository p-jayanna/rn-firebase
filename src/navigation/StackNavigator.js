import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginContainer from '../screens/containers/LoginContainer';
import HomeContainer from '../screens/containers/HomeContainer';
import ArticleContainer from '../screens/containers/ArticleContainer';
import AppHeader from './header/Header';
import {withBrandSettings} from '../styles/withBrandSettings';

const Stack = createStackNavigator();

const StackNavigator = props => {
  const {colors} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 80,
        },
      }}>
      <Stack.Screen
        name="main"
        component={HomeContainer}
        options={({navigation}) => ({
          headerTitle: () => <AppHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="article"
        component={ArticleContainer}
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

export default withBrandSettings(StackNavigator);
