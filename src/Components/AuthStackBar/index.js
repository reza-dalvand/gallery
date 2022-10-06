import ChooseLoginOrRegister from '../../Layouts/ChooseLoginOrRegister';
import Login from '../../Layouts/Login';
import Register from '../../Layouts/Register';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useColorMode} from 'native-base';
import {MainTabBarBottom} from '../MainTabBarBottom';
import {MainStackBar} from '../MainStackBar';
import {HeaderBarIcon} from '../HeaderBarIcon';

export const AuthStackBar = () => {
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
            fontWeight: 'bold',
            fontSize: 17,
          },
        }}>
        <Stack.Screen name="choose" component={ChooseLoginOrRegister} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Tab"
          component={MainTabBarBottom}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
