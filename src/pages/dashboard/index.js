import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
var outStyles = require('../../assets/style')

const index = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('NewPayment')}>
                <Text style={[outStyles.buttonText,]}>New Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('listTransactions')}>
                <Text style={[outStyles.buttonText,]}>List Transactions </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('listTransactions')}>
                <Text style={[outStyles.buttonText,]}>Statistics</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
