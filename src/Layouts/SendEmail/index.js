import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  Text,
  useColorMode,
  useToast,
} from 'native-base';

import Lottie from 'lottie-react-native';

const SendEmail = ({navigation}) => {
  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Box
        flex={1}
        alignItems="center"
        p={5}
        _light={{bg: '#F0F4F4'}}
        _dark={{bg: '#1B262C'}}>
        <Lottie
          style={{width: '75%', marginTop: '3%'}}
          source={require('../../../assets/images/forgetPassAnimate.json')}
          autoPlay
          loop
        />
        <Box mt={3}>
          <Text fontSize={30} fontWeight="bold">
            بازنشانی رمز عبور
          </Text>
          <Text mt={3} fontSize={16}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و
          </Text>
          <FormControl mt={8} isInvalid w="100%">
            <Text>آدرس ایمیل</Text>
            <Input
              bg="gray.100"
              mt={2}
              type="email"
              w="100%"
              defaultValue=""
              placeholder="sample@sample.com"
              textAlign="left"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            {/*<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>*/}
            {/*  Try different from previous passwords.*/}
            {/*</FormControl.ErrorMessage>*/}
          </FormControl>
          <Button
            onPress={() => navigation.navigate('checkEmail')}
            borderRadius="8"
            mt="4"
            bg="darkBlue.500"
            size="lg">
            ارسال
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default SendEmail;
