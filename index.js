/**
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore()

const RNRedux = () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => RNRedux);
