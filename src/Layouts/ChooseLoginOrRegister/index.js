import React from 'react';
import styles from './styles';
import Lottie from 'lottie-react-native';
import {Box, Text, Image, Button, useColorMode} from 'native-base';

const ChooseLoginOrRegister = ({navigation}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Box
      alignItems="center"
      _light={{bg: 'white'}}
      _dark={{bg: '#1B262C'}}
      justifyContent="center">
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
      <Text mt="10" mb="3" fontSize="2xl">
        𝖎𝖓𝖘𝖙𝖆 𝖘𝖙𝖔𝖗𝖞
      </Text>
      <Image
        size={100}
        borderRadius={100}
        source={require('../../../assets/images/logo.png')}
        alt="لوگو"
      />
      <Button
        onPress={() => navigation.navigate('login')}
        borderRadius="8"
        width="90%"
        mt="10"
        bg="darkBlue.500"
        size="lg">
        ورود
      </Button>
      <Button
        onPress={() => navigation.navigate('register')}
        _light={{
          bg: 'white',
          _text: {color: 'black', fontSize: 16, fontWidth: 'bold'},
        }}
        _dark={{
          bg: '#1B262C',
          _text: {color: 'white', fontSize: 16, fontWidth: 'bold'},
        }}
        fontSize="30"
        fontWeight="bold"
        borderRadius="8"
        borderColor="gray.600"
        borderWidth="1"
        width="90%"
        mt="3"
        size="lg">
        ثبت نام
      </Button>
      <Button _text={{color: 'blue.600'}} size="md" variant="link" mt="5">
        ورود به عنوان مهمان
      </Button>
      <Box h="100" />
    </Box>
  );
};

export default ChooseLoginOrRegister;
