import {createDrawerNavigator} from '@react-navigation/drawer';
import {Box} from 'native-base';
import React from 'react';
import {MainTabBarBottom} from '../MainTabBarBottom';

function A() {
  return <Box flex={1} bg="white"></Box>;
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

export const MainDrawerBar = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyRewardsStack" component={A} />
      <Drawer.Screen name="LocationsStack" component={B} />
      <Drawer.Screen name="tabs" component={MainTabBarBottom} />
    </Drawer.Navigator>
  );
};
