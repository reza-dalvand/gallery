import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorMode} from 'native-base';
import {HeaderBarIcon} from '../HeaderBarIcon';
import AllPosts from '../../Layouts/AllPosts';
import Home from '../../Layouts/Home';
import SinglePost from '../../Layouts/SinglePost';
import Favorites from '../../Layouts/Favorites';
import SingleFavorite from '../../Layouts/SingleFavorite';
import Profile from '../../Layouts/Profile';
import ChangeInformationByUser from '../../Layouts/ChangeInformationByUser';
import SendEmail from '../../Layouts/SendEmail';
import CheckEmail from '../../Layouts/CheckEmail';
import ChangePassword from '../../Layouts/ChangePassword';
import ContactUs from '../../Layouts/ContackUs';
import AboutUs from '../../Layouts/AboutUs';

export const ProfileStackBar = ({navigation, route}) => {
  const Stack = createStackNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Stack.Navigator initialRouteName="profile">
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
          options={{title: 'پروفایل', headerShown: false}}
          name="profile"
          component={Profile}
        />
        <Stack.Screen
          options={{title: 'ویرایش پروفایل', headerShown: false}}
          name="changeInformation"
          component={ChangeInformationByUser}
        />
        <Stack.Screen
          options={{title: 'ارسال ایمیل'}}
          name="sendEmail"
          component={SendEmail}
        />
        <Stack.Screen
          options={{title: 'چک کردن ایمیل'}}
          name="checkEmail"
          component={CheckEmail}
        />
        <Stack.Screen
          options={{title: 'تغییر رمز عبور'}}
          name="changePassword"
          component={ChangePassword}
        />
        <Stack.Screen
          options={{title: 'تماس با ما'}}
          name="contactUs"
          component={ContactUs}
        />
        <Stack.Screen
          options={{title: 'درباره ما'}}
          name="aboutUs"
          component={AboutUs}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
