import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => console.log(this.props)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    margin:5,
  },
  text: {
    color: 'black',
    fontSize: 30
  }
})

export default Button;