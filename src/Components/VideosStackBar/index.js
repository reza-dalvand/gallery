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
import AllVideos from '../../Layouts/AllVideos';
import VideosHome from '../../Layouts/VideosHome';
import SingleVideo from '../../Layouts/SingleVideo';

export const VideosStackBar = ({navigation, route}) => {
  const Stack = createStackNavigator();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Stack.Navigator initialRouteName="profile">
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
          options={{title: 'دسته بندی'}}
          name="categoryVideos"
          component={VideosHome}
        />
        <Stack.Screen
          options={{title: 'نمایش کلیپ ها'}}
          name="allVideoInCategory"
          component={AllVideos}
        />
        <Stack.Screen
          options={{title: 'نمایش کلیپ'}}
          name="singleVideo"
          component={SingleVideo}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
