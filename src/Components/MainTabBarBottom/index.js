import {View} from 'react-native';
import {Box, Button, Text, useColorMode} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainDrawerBar} from '../MainDrawerBar';
import Home from '../../Layouts/Home';
import {HeaderBarIcon} from '../HeaderBarIcon';
import {AllPostsStackBar} from '../AllPostsStackBar';
import SinglePost from '../../Layouts/SinglePost';
import AllPosts from '../../Layouts/AllPosts';
import Favorites from '../../Layouts/Favorites';
import {FavoritesStackBar} from '../FavoritesStackBar';
import Profile from '../../Layouts/Profile';
import {ProfileStackBar} from '../ProfileStackBar';

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
          : '#999696'
      }
      size={size}
    />
  );
};

export const MainTabBarBottom = () => {
  const Tab = createBottomTabNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorMode === 'light' ? 'white' : '#0F4C75',
        },
      }}
      initialRouteName="AllPostsStackBar">
      <Tab.Screen
        options={{
          tabBarLabel: 'پروفایل',
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
        name="ProfileStackBar"
        component={ProfileStackBar}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'مورد علاقه ها',
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
        name="FavoritesBar"
        component={FavoritesStackBar}
      />
      <Tab.Screen
        options={{
          // tabBarStyle: {display: 'none'},
          title: 'صفحه اصلی',
          tabBarLabel: 'عکس ها',
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
        name="AllPostsStackBar"
        component={AllPostsStackBar}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'کلیپ ها',
          tabBarIcon: ({focused}) => {
            return (
              <CustomIcon
                focused={focused}
                name="videocam-outline"
                colorMode={colorMode}
                size={30}
              />
            );
          },
        }}
        name="a"
        component={A}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'دانلودر',
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
    </Tab.Navigator>
  );
};
