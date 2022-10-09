import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  TextArea,
  useColorMode,
  useToast,
} from 'native-base';

import Lottie from 'lottie-react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const CustomBox = ({iconName, colorIcon, colorBox}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <TouchableOpacity style={{width: '27%'}}>
      <Box
        alignItems="center"
        borderRadius={10}
        justifyContent="center"
        mt={3}
        w="100%"
        height="100"
        bg={colorMode === 'light' ? 'white' : 'gray.300'}>
        <Box
          alignItems="center"
          justifyContent="center"
          bg={colorBox}
          w={50}
          h={50}
          borderRadius={100}>
          <MaterialIcon name={iconName} color={colorIcon} size={27} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const ContactUs = ({navigation}) => {
  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <ScrollView>
      <Box
        flex={1}
        alignItems="center"
        p={2}
        _light={{bg: '#F0F4F4'}}
        _dark={{bg: '#1B262C'}}>
        <Lottie
          style={{width: '100%', height: 200}}
          source={require('../../../assets/images/contactUsAnimate.json')}
          autoPlay
          loop
        />
        <Box w="100%" flexDir="row" justifyContent="space-around">
          <CustomBox
            iconName="support-agent"
            colorIcon="#E129FB"
            colorBox="#F9C9FF"
          />
          <CustomBox
            iconName="contact-mail"
            colorIcon="green"
            colorBox="#98FFD5"
          />
          <CustomBox
            iconName="phone-in-talk"
            colorIcon="#FF8505"
            colorBox="#FFE7BD"
          />
        </Box>
        <Box
          alignItems="center"
          p={3}
          mt={5}
          bg="white"
          w="100%"
          borderTopRadius={30}>
          <Box>
            <Text fontWeight="bold">نام و نام خانوادگی</Text>
            <Input
              bg="gray.100"
              mt={2}
              w="90%"
              defaultValue=""
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              textAlign="right"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Text mt={1} fontWeight="bold">
              آدرس ایمیل
            </Text>
            <Input
              bg="gray.100"
              mt={2}
              type="email"
              w="90%"
              defaultValue=""
              placeholder="sample@sample.com"
              textAlign="left"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Text mt={1} fontWeight="bold">
              متن پیام
            </Text>
            <TextArea
              bg="gray.100"
              mt={2}
              w="90%"
              defaultValue=""
              placeholder="متن پیام خود را وارد کنید"
              textAlign="right"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Button
              onPress={() => navigation.navigate('Tab')}
              borderRadius="8"
              mt="4"
              bg="darkBlue.500"
              size="lg">
              ارسال پیام
            </Button>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ContactUs;
