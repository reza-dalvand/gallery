import React from 'react';
import {Box, Image, Text, useColorMode, useToast} from 'native-base';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const CustomBox = ({iconName, myColor}) => {
  return (
    <TouchableOpacity style={{width: '28%'}}>
      <Box
        alignItems="center"
        borderRadius={10}
        justifyContent="center"
        mt={3}
        w="100%"
        height="100"
        bg={myColor ? 'red.500' : 'gray.300'}>
        <Icon
          name={iconName}
          color={myColor ? 'white' : 'gray.800'}
          size={30}
        />
      </Box>
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();

  const CustomButtonOption = ({name, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: colorMode === 'light' ? 'white' : 'gray',
          borderBottomWidth: 1,
          borderBottomColor: '#e0dfde',
        }}
        w="100%">
        <Box
          w="100%"
          p={4}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          height="65">
          <Text fontSize={15} fontWeight="bold">
            {name}
          </Text>
          <Icon
            name={'ios-arrow-back-circle-outline'}
            color={colorMode === 'light' ? 'black' : 'white'}
            size={30}
          />
        </Box>
      </TouchableOpacity>
    );
  };
  return (
    <Box _light={{bg: '#F0F4F4'}} _dark={{bg: '#1B262C'}}>
      {/*//header*/}
      <Box h="250" bg="#1B262C">
        <Text ml={4} mt={5} color="white" fontSize={26} fontWeight="bold">
          پروفایل
        </Text>
        <Box flexDir="row" justifyContent="space-between" alignItems="center">
          <Box
            mt={5}
            ml={3}
            justifyContent="center"
            alignItems="center"
            flexDir="row">
            <Image
              size={90}
              borderRadius={100}
              source={require('../../../assets/images/profileImg.jpg')}
              alt="profile image"
            />
            <Box mt={2} ml={4}>
              <Text fontSize={18} color="orange.500">
                اشتراکی
              </Text>
              <Text mt={2} fontSize={20} color="white">
                رضا دالوند
              </Text>
            </Box>
          </Box>
          <Box
            mt={6}
            mr={4}
            w={50}
            h={50}
            justifyContent="center"
            alignItems="center"
            bg="blueGray.900"
            borderRadius={100}>
            <Icon
              onPress={() => navigation.navigate('changeInformation')}
              name="pencil"
              size={25}
              color="white"
            />
          </Box>
        </Box>
      </Box>
      {/*Boxs*/}
      <Box
        p={3}
        _light={{bg: 'white'}}
        _dark={{bg: 'gray.600'}}
        w="100%"
        flexDir="row"
        alignItems="center"
        justifyContent="space-around">
        <CustomBox myColor={true} iconName="power" />
        <CustomBox iconName="ios-lock-closed-outline" />
        <CustomBox iconName="key-outline" />
      </Box>
      {/*options*/}
      <ScrollView>
        <Box _light={{bg: 'white'}} _dark={{bg: 'gray.400'}} mt={3}>
          <CustomButtonOption
            onPress={() => navigation.navigate('sendEmail')}
            name="تغییر رمز عبور"
          />
          <CustomButtonOption
            onPress={() => navigation.navigate('contactUs')}
            name="تماس با ما"
          />
          <CustomButtonOption
            onPress={() => navigation.navigate('aboutUs')}
            name="درباره ما"
          />
        </Box>
        <Box _light={{bg: '#F0F4F4'}} _dark={{bg: '#1B262C'}} mt={3}>
          <CustomButtonOption name="ارسال تیکت" />
          <CustomButtonOption name="توافق نامه" />
        </Box>
        <Box h={450} />
      </ScrollView>
    </Box>
  );
};

export default Profile;
