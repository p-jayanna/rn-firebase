import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../../screens/containers/HomeContainer';
import ArticleContainer from '../../screens/containers/ArticleContainer';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="home">
      <HomeStack.Screen
        name="home"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="article"
        component={ArticleContainer}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
