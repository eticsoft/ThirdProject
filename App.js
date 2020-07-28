import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import StartScreen from './src/login/index';
import Login from './src/login/pages/login';
import Register from './src/login/pages/register'
import Transaction from './src/pos/transaction'
import GetPaid from './src/pos/getPaid'
import CcForm from './src/pos/ccForm'
import { createStore } from 'redux'
import { ekleYer } from './src/actions/place'



export class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeNameChangeHandler = (value) => {
    this.setState({
      placeName: value
    });
  }

  placesOutput = () => {
    return (
      <FlatList
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => (
          <ListItem
            placeName={info.item.value}
          />
        )}
      />
    )
  }
  render() {
    return (
      // <StartScreen></StartScreen>
      // <Login></Login>
      // <Register></Register>
      // <Transaction></Transaction>
      // <GetPaid/>
      // <CcForm/>
      <View style={{flex:1}}>
        <View>
          <TextInput
            placeholder="Yer"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          ></TextInput>
          <Button title='Add'
            onPress={this.placeSubmitHandler,console.log(this.state)}
          />
        </View>
        <View>
          {this.placesOutput()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(ekleYer(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
