import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StartScreen from './src/login/index';
import Login from './src/login/pages/login';
import Register from './src/login/pages/register'
import Transaction from './src/pos/transaction'
import GetPaid from './src/pos/getPaid'

export class App extends Component {
  render() {
    return (
        // <StartScreen></StartScreen>
        // <Login></Login>
        // <Register></Register>
        // <Transaction></Transaction>
        <GetPaid/>
    )
  }
}

export default App
