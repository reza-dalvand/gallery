import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ConfigureAxios from './ConfigureAxios';
import axios from 'axios';
import {store} from './Redux/store';

ConfigureAxios(axios, store);

AppRegistry.registerComponent(appName, () => App);
