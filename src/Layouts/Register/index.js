import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon, Input, Pressable, ScrollView, Stack} from 'native-base';
import Lottie from 'lottie-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';

const Register = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerWlcTxt}>
          {/*<Text style={styles.wlcTxt}>ساخت اکانت</Text>*/}
        </View>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
