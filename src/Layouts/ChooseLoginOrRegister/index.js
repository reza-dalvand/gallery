import React, {useRef, useEffect, useState} from 'react';
import styles from './styles';
import Lottie from 'lottie-react-native';
import {Box, Text, Image, Button} from 'native-base';
import {useSelector} from 'react-redux';

const ChooseLoginOrRegister = ({navigation}) => {
  const {themeMood} = useSelector(state => state.systemReducer);

  return (
    <Box alignItems="center" bg="#1B262C" justifyContent="center">
      {themeMood ? (
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

      <Text
        mt="10"
        _dark={{color: 'white'}}
        _light={{color: 'white'}}
        color="white"
        mb="3"
        fontSize="2xl">
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
        bg="blue.600"
        borderRadius="8"
        width="90%"
        mt="10"
        size="lg">
        ورود
      </Button>
      <Button
        onPress={() => navigation.navigate('register')}
        borderRadius="8"
        borderColor="#BBE1FA"
        borderWidth="1"
        width="90%"
        _text={{
          color: '#1F2937',
        }}
        bg="white"
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
