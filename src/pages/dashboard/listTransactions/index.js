import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
var outStyles = require('../../../assets/style')

const index = () => {
    return (
        <View>
           <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('CreateOrder')}>
                <Text style={[outStyles.buttonText,]}>Sending Link</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('listTransactions')}>
                <Text style={[outStyles.buttonText,]}>Create QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('listTransactions')}>
                <Text style={[outStyles.buttonText,]}>Display CC Form</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
