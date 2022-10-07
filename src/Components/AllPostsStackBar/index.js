import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorMode} from 'native-base';
import {HeaderBarIcon} from '../HeaderBarIcon';
import AllPosts from '../../Layouts/AllPosts';
import Home from '../../Layouts/Home';
import SinglePost from '../../Layouts/SinglePost';

export const AllPostsStackBar = () => {
  const Stack = createStackNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Group
        screenOptions={() => ({
          headerTintColor: colorMode === 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
          headerRight: () => <HeaderBarIcon />,
          headerStyle: {
            backgroundColor: colorMode === 'light' ? 'white' : '#0F4C75',
          },
        })}>
        <Stack.Screen
          options={{title: 'صفحه اصلی'}}
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{title: 'نمایش همه'}}
          name="AllPosts"
          component={AllPosts}
        />
        <Stack.Screen
          options={{title: 'نمایش همه'}}
          name="singlePost"
          component={SinglePost}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
