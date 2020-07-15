import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StartScreen from './src/login/index';
import Login from './src/login/pages/login';



export class App extends Component {
  render() {
    return (
        // <StartScreen></StartScreen>
        <Login></Login>
    )
  }
}

export default App
