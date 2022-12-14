import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  Box,
  ScrollView,
  Text,
  Stack,
  useColorMode,
  Button,
  Input,
  FormControl,
} from 'native-base';
import Lottie from 'lottie-react-native';

const Login = ({navigation}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  let box = (
    <Box mt={1} style={{marginRight: '25%'}}>
      <Button _text={{color: 'blue.600'}} size="sm" variant="link">
        رمز عبور خود را فراموش کرده اید ؟
      </Button>
    </Box>
  );
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Box
        _light={{bg: 'white'}}
        _dark={{bg: '#1B262C'}}
        flex="1"
        p="1"
        justifyContent="center"
        alignItems="center">
        <Text fontFamily="Vazir-Bold" mt={5} fontSize="30">
          خوش آمدید
        </Text>
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
        <Box mt={10} w="90%" alignItems="center" justifyContent="center">
          <Input
            bg="gray.100"
            w="90%"
            defaultValue=""
            placeholder="نام کاربری"
            textAlign="center"
            borderColor="#BBE1FA"
            placeholderTextColor="gray.500"
          />
          <Input
            bg="gray.100"
            mt={2}
            type="password"
            w="90%"
            defaultValue=""
            placeholder="رمز عبور"
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

          {box}
          <Button
            onPress={() => navigation.navigate('Tab')}
            borderRadius="8"
            width="90%"
            mt="4"
            bg="darkBlue.500"
            size="lg">
            ورود
          </Button>
        </Box>
        <Box mt="2">
          <Button
            onPress={() => navigation.navigate('register')}
            _text={{color: 'blue.600'}}
            size="sm"
            variant="link">
            در صورت نداشتن اکانت کلیک کنید؟
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Login;
