import React from 'react';
import {
  Box,
  Button,
  Image,
  Input,
  Text,
  useColorMode,
  FormControl,
  ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const ChangeInformationByUser = ({navigation}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <ScrollView>
      {/*header*/}
      <Box bg="#1B262C">
        <Box
          p={2}
          w="100%"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-forward"
            size={25}
            color="white"
          />
          <Text color="white" fontSize={16}>
            ویرایش پروفایل
          </Text>
          <Button
            // onPress={() => navigation.navigate('register')}
            _text={{
              color: 'white',
              fontSize: 17,
            }}
            size="md"
            variant="link">
            ذخیره
          </Button>
        </Box>
        <Box
          w="100%"
          h="230"
          mb={5}
          alignItems="center"
          justifyContent="center"
          position="relative">
          <Image
            size={180}
            borderRadius={100}
            source={require('../../../assets/images/profileImg.jpg')}
            alt="profile image"
          />
          <Box
            position="absolute"
            right="30%"
            top="70%"
            alignItems="center"
            justifyContent="center"
            w={39}
            h={39}
            borderRadius={50}
            bg="#F03519">
            <Icon
              onPress={() => navigation.goBack()}
              name="camera"
              size={30}
              color="white"
            />
          </Box>
        </Box>
      </Box>
      <Box p={6}>
        <FormControl.Label>نام کاربری</FormControl.Label>
        <Input
          mb={3}
          value="Reza_dlv"
          variant="underlined"
          placeholder="نام کاربری"
        />
        <FormControl.Label>ایمیل</FormControl.Label>
        <Input
          mb={3}
          value="rdalvand@yahoo.com"
          variant="underlined"
          placeholder="ایمیل"
        />
        <FormControl.Label>نام</FormControl.Label>
        <Input mb={3} value="رضا" variant="underlined" placeholder="نام" />
        <FormControl.Label>نام خانوادگی</FormControl.Label>
        <Input
          mb={3}
          value="دالوند"
          variant="underlined"
          placeholder="نام خانوادگی"
        />
        <FormControl.Label>شماره تماس</FormControl.Label>
        <Input
          mb={3}
          value="09909412001"
          variant="underlined"
          placeholder="نام خانوادگی"
        />
      </Box>
      <Box mt={2} justifyContent="center" alignItems="center">
        <Button
          onPress={() => navigation.navigate('Tab')}
          borderRadius="8"
          width="80%"
          mt="4"
          bg="darkBlue.500"
          size="lg">
          ویرایش
        </Button>
      </Box>
      <Box h={100} />
    </ScrollView>
  );
};

export default ChangeInformationByUser;
