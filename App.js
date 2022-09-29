import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './Redux/store';
import ConfigureAxios from './ConfigureAxios';
import axios from 'axios';

const App = () => {
  ConfigureAxios(axios, store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.containerMainApp}>
          <Text>hi</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  containerMainApp: {
    padding: 1,
    flex: 1,
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
