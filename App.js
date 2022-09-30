import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';
import {store, persistor} from './Redux/store';
import ConfigureAxios from './ConfigureAxios';
import axios from 'axios';
import Login from './src/Layouts/Login';
import ChooseLoginOrRegister from './src/Layouts/ChooseLoginOrRegister';
const App = () => {
  ConfigureAxios(axios, store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <View style={styles.containerMainApp}>
            <ChooseLoginOrRegister />
          </View>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    fontFamily: 'Vazir',
    padding: 2,
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
