import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.containerMainApp}>
      <Text style={{fontFamily: 'vazir', fontSize: 30}}>ورود</Text>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{fontFamily: 'Vazir', fontWeight: 'bold', fontSize: 20}}>
        فونت یاب یک موتور جستجوی درون سایتی
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    padding: 1,
    flex: 1,
  },
  txt_enter: {
    fontSize: 18,
    fontFamily: 'Vazir',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Vazir',
  },
});

export default Login;
