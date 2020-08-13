import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/login/login';
import authPhone from './src/pages/login/authPhone'
import merchantSelect from './src/pages/login/merchantSelect'
import deviceVerification from './src/pages/login/deviceVerification'
import passwordReset from './src/pages/login/passwordReset'
import Register from './src/pages/register/register'
import newCustomerForm from './src/pages/register/newCustomerForm'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="authPhone" component={authPhone} />
        <Drawer.Screen name="merchantSelect" component={merchantSelect} />
        <Drawer.Screen name="deviceVerification" component={deviceVerification} />
        <Drawer.Screen name="passwordReset" component={passwordReset} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="newCustomerForm" component={newCustomerForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}