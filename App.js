import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackBar} from './src/Components/AuthStackBar';

const App = () => {
  return (
    <View style={styles.containerMainApp}>
      <NavigationContainer>
        <AuthStackBar />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    fontFamily: 'Vazir',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
