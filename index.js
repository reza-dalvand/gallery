import React from 'react';
import {AppRegistry, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ConfigureAxios from './ConfigureAxios';
import axios from 'axios';
import {persistor, store} from './Redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';

I18nManager.forceRTL(true);

ConfigureAxios(axios, store);

const mainApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <App />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => mainApp);
