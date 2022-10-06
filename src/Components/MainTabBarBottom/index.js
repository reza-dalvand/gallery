import {View} from 'react-native';
import {Box, Button, Text, useColorMode} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainDrawerBar} from '../MainDrawerBar';
import Home from '../../Layouts/Home';

function A({navigation}) {
  return (
    <Box flex={1} bg="white">
      <Button onPress={() => navigation.navigate('c')}>ssss</Button>
    </Box>
  );
}
function B() {
  return <Box flex={1} bg="white"></Box>;
}
function C() {
  return <Box flex={1} bg="white"></Box>;
}
function D() {
  return <Box flex={1} bg="white"></Box>;
}
function F() {
  return <Box flex={1} bg="white"></Box>;
}

const CustomIcon = ({name, size, focused, colorMode}) => {
  return (
    <Icon
      name={name}
      color={
        focused
          ? colorMode === 'light'
            ? 'black'
            : 'white'
          : colorMode === 'dark'
          ? 'gray'
          : '#CDC9C3'
      }
      size={size}
    />
  );
};

export const MainTabBarBottom = () => {
  const Tab = createBottomTabNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  const HeaderBarIcon = () => {
    return (
      <Icon
        style={{margin: 15}}
        onPress={() => {
          toggleColorMode();
        }}
        name={colorMode === 'light' ? 'sunny' : 'moon'}
        size={25}
        color={colorMode === 'light' ? 'orange' : 'white'}
      />
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="main"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: colorMode === 'light' ? '#f5f2f2' : '#0F4C75',
        },
        headerTintColor: colorMode === 'light' ? 'black' : 'white',

        headerRight: () => <HeaderBarIcon />,

        headerStyle: {
          backgroundColor: colorMode === 'light' ? '#f5f2f2' : '#0F4C75',
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused, size}) => {
            return (
              <CustomIcon
                focused={focused}
                name="person-outline"
                colorMode={colorMode}
                size={24}
              />
            );
          },
        }}
        name="main"
        component={C}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <CustomIcon
                focused={focused}
                name="heart-outline"
                colorMode={colorMode}
                size={25}
              />
            );
          },
        }}
        name="Settings"
        component={B}
      />
      <Tab.Screen
        options={{
          title: 'خانه',
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused, size}) => {
            return (
              <CustomIcon
                focused={focused}
                name="md-grid-outline"
                colorMode={colorMode}
                size={23}
              />
            );
          },
        }}
        name="c"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused, size}) => {
            return (
              <CustomIcon
                focused={focused}
                name="download-outline"
                colorMode={colorMode}
                size={30}
              />
            );
          },
        }}
        name="d"
        component={D}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                focused={focused}
                name="add-circle-outline"
                colorMode={colorMode}
                size={30}
              />
            );
          },
        }}
        name="a"
        component={A}
      />
    </Tab.Navigator>
  );
};
