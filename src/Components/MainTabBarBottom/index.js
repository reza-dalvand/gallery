import {useColorMode} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AllPostsStackBar} from '../AllPostsStackBar';
import {FavoritesStackBar} from '../FavoritesStackBar';
import {ProfileStackBar} from '../ProfileStackBar';
import {VideosStackBar} from '../VideosStackBar';
import Downloader from '../../Layouts/Downloader';
import {HeaderBarIcon} from '../HeaderBarIcon';

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
        tabBarActiveTintColor: colorMode === 'light' ? 'black' : 'white',
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
        name="VideosStackBar"
        component={VideosStackBar}
      />
      <Tab.Screen
        options={{
          headerTintColor: colorMode === 'light' ? 'black' : 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
          headerRight: () => <HeaderBarIcon />,
          headerStyle: {
            backgroundColor: colorMode === 'light' ? 'white' : '#0F4C75',
          },
          title: 'دانلودر',
          tabBarLabel: 'دانلودر',
          headerShown: true,
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
        name="downloader"
        component={Downloader}
      />
    </Tab.Navigator>
  );
};
