import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon, Input, Pressable, ScrollView, Stack} from 'native-base';
import Lottie from 'lottie-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import flex from 'native-base/src/components/primitives/Flex';

const Login = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.containerWlcTxt}>
          <Text style={styles.wlcTxt}>خوش آمدید</Text>
        </View>
        <Lottie
          style={styles.lottie}
          source={require('../../../assets/images/loginAnimate.json')}
          autoPlay
          loop
        />
        <View style={styles.containerInputs}>
          <Stack m={6} space={4} w="100%" alignItems="center">
            <CustomInput placeHolder={'نام کاربری'} styleType={'inpLarge'} />
            <CustomInput
              placeHolder={'رمز عبور'}
              styleType={'inpLarge'}
              secureTextEntry={true}
            />
            <CustomButton
              onPress={() => navigation.navigate('register')}
              text="رمز عبور خود را فراموش کرده اید ؟ "
              typeStyle="btnNoneStyle"
              btnTxtStyle="txtNoneStyle"
            />
          </Stack>
          <CustomButton text="ورود" typeStyle="btnLarge" />
        </View>
        <TouchableOpacity style={styles.btnHaventAccount}>
          <Text style={styles.txtHaventAccount}>
            در صورت نداشتن اکانت کلیک کنید؟
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
