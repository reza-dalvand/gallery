import React, {useRef, useEffect, useState} from 'react';
import styles from './styles';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import CustomButton from '../../Components/CustomButton';
import {background} from 'native-base/lib/typescript/theme/styled-system';

const ChooseLoginOrRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.lottie}
        source={require('../../../assets/images/loginAnimate.json')}
        autoPlay
        loop
      />
      <Text style={styles.titleText}>𝖎𝖓𝖘𝖙𝖆 𝖘𝖙𝖔𝖗𝖞</Text>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />
      <CustomButton
        onPress={() => navigation.navigate('login')}
        text="ورود"
        typeStyle="btnLarge"
        btnAdditionStyles={{marginTop: 15}}
      />

      <CustomButton
        onPress={() => navigation.navigate('register')}
        text="ثبت نام"
        typeStyle="btnLarge"
        txtAdditionStyles={{color: 'black'}}
        btnAdditionStyles={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
          marginTop: 10,
        }}
      />
      <TouchableOpacity>
        <Text style={styles.txtGuest}>ورود به عنوان مهمان</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseLoginOrRegister;
