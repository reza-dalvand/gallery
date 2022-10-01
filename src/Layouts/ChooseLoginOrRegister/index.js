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
import {CheckIcon, Icon, Input, Pressable, Stack, Button} from 'native-base';

const ChooseLoginOrRegister = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Lottie
        style={styles.lottie}
        source={require('../../../assets/images/loginAnimate.json')}
        autoPlay
        loop
      />
      <Text style={styles.titleText}> 𝖎𝖓𝖘𝖙𝖆 𝖘𝖙𝖔𝖗𝖞</Text>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('login')}
        style={styles.btnLogin}>
        <Text style={styles.txtLogin}>ورود</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('register')}
        style={styles.btnRegister}>
        <Text style={styles.txtRegister}>ثبت نام</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txtGuest}>ورود به عنوان مهمان</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseLoginOrRegister;
