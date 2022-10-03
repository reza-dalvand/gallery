import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ScrollView, Stack} from 'native-base';
import Lottie from 'lottie-react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.wlcTxt}>خوش آمدید</Text>
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
              text="رمز عبور خود را فراموش کرده اید ؟ "
              typeStyle="btnNoneStyle"
              btnTxtStyle="txtNoneStyle"
            />
          </Stack>
          <CustomButton text="ورود" typeStyle="btnLarge" />
        </View>
        <View style={styles.btnHaventAccount}>
          <CustomButton
            onPress={() => navigation.navigate('register')}
            text="در صورت نداشتن اکانت کلیک کنید؟"
            typeStyle="btnNoneStyle"
            btnTxtStyle="txtNoneStyle"
          />
        </View>
        <View style={{marginTop: 100}} />
      </View>
    </ScrollView>
  );
};

export default Login;
