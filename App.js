import React, {useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider, useColorMode, useColorModeValue} from 'native-base';
import {store, persistor} from './Redux/store';
import Login from './src/Layouts/Login';
import ChooseLoginOrRegister from './src/Layouts/ChooseLoginOrRegister';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './src/Layouts/Register';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChangeThemeMood} from './Redux/Reducers/systemReducer';

const App = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  const {themeMood} = useSelector(state => state.systemReducer);

  const HeaderBarIcon = () => {
    return (
      <Icon
        style={{margin: 15}}
        onPress={() => {
          dispatch(ChangeThemeMood({themeMood: !themeMood}));
        }}
        name={themeMood ? 'sunny' : 'moon'}
        size={25}
        color={themeMood ? 'orange' : 'black'}
      />
    );
  };
  return (
    <View style={styles.containerMainApp}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="choose">
          <Stack.Group
            screenOptions={{
              headerStyle: {backgroundColor: themeMood ? '#f5f2f2' : '#0F4C75'},
              title: themeMood ? 'روشن' : 'تاریک',
              headerRight: () => <HeaderBarIcon />,
              headerTintColor: themeMood ? 'black' : 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 17,
              },
            }}>
            <Stack.Screen name="choose" component={ChooseLoginOrRegister} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
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
