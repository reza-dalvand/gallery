import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorMode} from 'native-base';
import {HeaderBarIcon} from '../HeaderBarIcon';
import AllPosts from '../../Layouts/AllPosts';
import Home from '../../Layouts/Home';
import SinglePost from '../../Layouts/SinglePost';
import Favorites from '../../Layouts/Favorites';
import SingleFavorite from '../../Layouts/SingleFavorite';

export const FavoritesStackBar = ({navigation, route}) => {
  const Stack = createStackNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Stack.Navigator initialRouteName="favorites">
      <Stack.Group
        screenOptions={() => ({
          headerTintColor: colorMode === 'light' ? 'black' : 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
            fontSize: 17,
          },
          headerRight: () => <HeaderBarIcon />,
          headerStyle: {
            backgroundColor: colorMode === 'light' ? 'white' : '#0F4C75',
          },
        })}>
        <Stack.Screen
          options={{title: 'مورد علاقه ها'}}
          name="favorites"
          component={Favorites}
        />
        <Stack.Screen
          options={{title: 'نمایش پست'}}
          name="singleFavorite"
          component={SingleFavorite}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
