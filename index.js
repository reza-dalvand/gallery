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
import {extendTheme} from 'native-base';

I18nManager.forceRTL(true);

ConfigureAxios(axios, store);

const mainApp = ({children}) => {
  const theme = extendTheme({
    fontConfig: {
      Vazir: {
        100: {
          normal: 'Vazir-Thin',
        },
        200: {
          normal: 'Vazir-Light',
        },
        300: {
          normal: 'Vazir',
        },
        400: {
          normal: 'Vazir-Medium',
        },
        500: {
          normal: 'Vazir-Medium',
        },
        600: {
          normal: 'Vazir-Bold',
        },
        // Add more variants
        //   700: {
        //     normal: 'Vazir-Bold-Bold',
        //   },
        //   800: {
        //     normal: 'Vazir-Bold-Bold',
        //     italic: 'Vazir-Bold-BoldItalic',
        //   },
        //   900: {
        //     normal: 'Vazir-Bold-Bold',
        //     italic: 'Vazir-Bold-BoldItalic',
        //   },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Vazir-Bold',
      body: 'Vazir-Medium',
      mono: 'Vazir',
    },
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <App />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};
// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: 'light',
//   components: {
//     Text: {
//       baseStyle: (props: any) => {
//         return {
//           _light: {color: 'black'},
//           _dark: {color: 'white'},
//         };
//       },
//     },
//     Button: {
//       baseStyle: ({colorMode}) => {
//         return {
//           bg: colorMode === 'light' ? 'white' : 'white',
//           // _light: {bg: 'info.600', color: 'white'},
//           // _dark: {bg: 'error.600', color: 'white'},
//         };
//       },
//     },
//   },
// };
//
// // extend the theme
// const customTheme = extendTheme({config});
// const mainApp = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NativeBaseProvider theme={customTheme}>
//           <App />
//         </NativeBaseProvider>
//       </PersistGate>
//     </Provider>
//   );
// };

AppRegistry.registerComponent(appName, () => mainApp);
