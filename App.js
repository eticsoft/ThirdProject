/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import {
  ActivityIndicator,
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import CounterReducer from './src/reducers/CounterReducer';
import Login from './src/pages/user/login';
import Register from './src/pages/user/register';
import HomeDashboard from './src/pages/dashboard/index'
import NewPayment from './src/pages/dashboard/newPayment/index'
import CreateOrder from './src/pages/dashboard/newPayment/createOrder'
import { HomeScreen } from './src/home_screen';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from './src/profile_screen';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Stack = createStackNavigator();

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App: () => React$Node = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });


  // Animation part 
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 5000 }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 5000 }).start();
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{ title: 'Kayıt Ol' }}
          />
          <Stack.Screen
            name='HomeDashboard'
            component={HomeDashboard}
            options={{ title: 'Home Dashboard' }}
          />
          <Stack.Screen
            name='NewPayment'
            component={NewPayment}
            options={{ title: 'New Payment' }}
          />
          <Stack.Screen
            name='CreateOrder'
            component={CreateOrder}
            options={{ title: 'Create Order' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
});




export default App;
