import React from 'react';
import styles from './styles';
import {
  Box,
  Text,
  Button,
  Input,
  ScrollView,
  Stack,
  useColorMode,
} from 'native-base';
import TextTicker from 'react-native-text-ticker';
import Lottie from 'lottie-react-native';

const Register = ({navigation}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box
        _light={{bg: 'white'}}
        _dark={{bg: '#1B262C'}}
        flex="1"
        p="1"
        justifyContent="center"
        alignItems="center">
        {colorMode === 'light' ? (
          <Lottie
            style={styles.lottie}
            source={require('../../../assets/images/loginAnimate.json')}
            autoPlay
            loop
          />
        ) : (
          <Lottie
            style={styles.lottie}
            source={require('../../../assets/images/loginAnimateDark.json')}
            autoPlay
            loop
          />
        )}
        <Box alignItems="center" justifyContent="center" w="90%">
          <Stack m={6} space={3} w="100%" alignItems="center">
            <Input
              bg="gray.100"
              mt={1}
              w="90%"
              defaultValue=""
              placeholder="نام کاربری"
              textAlign="center"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Input
              bg="gray.100"
              mt={1}
              w="90%"
              defaultValue=""
              placeholder="ایمیل"
              textAlign="center"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Input
              bg="gray.100"
              mt={1}
              w="90%"
              defaultValue=""
              placeholder="رمز عبور"
              textAlign="center"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            <Input
              bg="gray.100"
              mt={1}
              type="password"
              w="90%"
              defaultValue=""
              placeholder="تکرار رمز عبور"
              textAlign="center"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />
            {/*<FormControl.HelperText>*/}
            {/*  Must be atleast 6 characters.*/}
            {/*</FormControl.HelperText>*/}
            {/*<FormControl.ErrorMessage>*/}
            {/*  Atleast 6 characters are required.*/}
            {/*</FormControl.ErrorMessage>*/}
          </Stack>
          <Button
            onPress={() => navigation.navigate('login')}
            borderRadius="8"
            width="90%"
            bg="darkBlue.500"
            size="lg">
            ثبت نام
          </Button>
        </Box>
      </Box>
      <Box style={{marginTop: 100}} />
    </ScrollView>
  );
};

export default Register;
