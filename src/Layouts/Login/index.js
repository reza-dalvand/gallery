import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'vazir', fontSize: 30}}>ورود</Text>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{fontFamily: 'Vazir', fontWeight: 'bold', fontSize: 20}}>
        فونت یاب یک موتور جستجوی درون سایتی
      </Text>
    </View>
  );
};

export default Login;
