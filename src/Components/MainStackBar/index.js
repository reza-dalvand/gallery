import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useColorMode} from 'native-base';
import Home from '../../Layouts/Home';
import {MainTabBarBottom} from '../MainTabBarBottom';
import {HeaderBarIcon} from '../HeaderBarIcon';
export const MainStackBar = () => {
  const Stack = createStackNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Stack.Navigator initialRouteName="choose">
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#f5f2f2' : '#0F4C75',
          },
          title: colorMode === 'light' ? 'روشن' : 'تاریک',
          headerRight: () => <HeaderBarIcon />,
          headerTintColor: colorMode === 'light' ? 'black' : 'white',
          headerTitleStyle: {
            // fontWeight: 'bold',
            fontSize: 17,
          },
        }}>
        <Stack.Screen name="Tab" component={MainTabBarBottom} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
