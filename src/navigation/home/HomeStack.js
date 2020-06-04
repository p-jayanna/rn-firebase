import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../../screens/containers/HomeContainer';
import ArticleContainer from '../../screens/containers/ArticleContainer';
import AppHeader from '../header/Header';
import {withBrandSettings} from '../../styles/withBrandSettings';
import SearchContainer from '../../screens/containers/SearchContainer';
import MapContainer from '../../screens/containers/MapContainer';
import AddArticleContainer from '../../screens/containers/AddArticleContainer';
import CameraContainer from '../../screens/containers/CameraContainer';
import UserContainer from '../../screens/containers/UserContainer';

const Stack = createStackNavigator();

const HomeStack = props => {
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
        name="user"
        component={UserContainer}
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
        name="search"
        component={SearchContainer}
        options={({navigation}) => ({
          headerTitle: () => <AppHeader navigation={navigation} />,
          headerLeft: null,
        })}
      />
      <Stack.Screen
        name="map"
        component={MapContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addarticle"
        component={AddArticleContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="camera"
        component={CameraContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default withBrandSettings(HomeStack);
