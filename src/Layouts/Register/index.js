import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './styles';
import {ScrollView, Stack} from 'native-base';
import Lottie from 'lottie-react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';

const Register = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Lottie
          style={styles.lottie}
          source={require('../../../assets/images/loginAnimate.json')}
          autoPlay
          loop
        />
        <View style={styles.containerInputs}>
          <Stack m={6} space={4} w="100%" alignItems="center">
            <CustomInput placeHolder={'ایمیل'} styleType={'inpLarge'} />

            <CustomInput placeHolder={'نام کاربری'} styleType={'inpLarge'} />
            <CustomInput
              placeHolder={'رمز عبور'}
              styleType={'inpLarge'}
              secureTextEntry={true}
            />
            <CustomInput
              placeHolder={'تایید رمز عبور'}
              styleType={'inpLarge'}
              secureTextEntry={true}
            />
          </Stack>
          <CustomButton text="ثبت نام" typeStyle="btnLarge" />
          <View style={{marginTop: 100}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
