import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {useColorMode} from 'native-base';
import Login from './src/Layouts/Login';
import ChooseLoginOrRegister from './src/Layouts/ChooseLoginOrRegister';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './src/Layouts/Register';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const {themeMood} = useSelector(state => state.systemReducer);
  const {colorMode, toggleColorMode} = useColorMode();

  const HeaderBarIcon = () => {
    return (
      <Icon
        style={{margin: 15}}
        onPress={() => {
          toggleColorMode();
        }}
        name={colorMode === 'light' ? 'sunny' : 'moon'}
        size={25}
        color={colorMode === 'light' ? 'orange' : 'white'}
      />
    );
  };
  return (
    <View style={styles.containerMainApp}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="choose">
          <Stack.Group
            screenOptions={{
              headerStyle: {
                backgroundColor: colorMode === 'light' ? '#f5f2f2' : '#0F4C75',
              },
              title: colorMode === 'light' ? 'روشن' : 'تاریک',
              headerRight: () => <HeaderBarIcon />,
              headerTintColor: colorMode === 'light' ? 'black' : 'white',
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
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
