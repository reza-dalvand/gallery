import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';
import {store, persistor} from './Redux/store';
import Login from './src/Layouts/Login';
import ChooseLoginOrRegister from './src/Layouts/ChooseLoginOrRegister';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Appearance} from 'react-native';
import Register from './src/Layouts/Register';

const App = () => {
  const Stack = createStackNavigator();
  const colorScheme = Appearance.getColorScheme();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <View style={styles.containerMainApp}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="choose">
                <Stack.Screen
                  name="choose"
                  component={ChooseLoginOrRegister}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  options={{
                    title: 'ورود',
                    headerStyle: {
                      backgroundColor: '#f5f2f2',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginLeft: -20,
                    },
                  }}
                  name="login"
                  component={Login}
                />
                <Stack.Screen
                  options={{
                    title: 'ثبت نام',
                    headerStyle: {
                      backgroundColor: '#f5f2f2',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginLeft: -20,
                    },
                  }}
                  name="register"
                  component={Register}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    fontFamily: 'Vazir',
    // padding: 2,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//

//
// const App = () => {
//   const [text, setText] = useState('');
//   const [refresh, setRefresh] = useState(false);
//
//   return (
//     <View style={styles.container}>
//       <Pressable
//         onPress={() =>
//           Alert.alert('hi reza', 'chetori gigule', [
//             {
//               text: 'yse',
//               onPress: () => console.log('yes'),
//             },
//             {
//               text: 'no',
//               onPress: () => console.log('yes'),
//             },
//           ])
//         }
//         style={styles.btn}>
//         <Text>click</Text>
//       </Pressable>
//     </View>
//   );
// };
//
//
// export default App;
