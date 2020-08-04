import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
var outStyles = require('../../../assets/style')

const newPayment = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('CreateOrder')}>
                <Text style={[outStyles.buttonText,]}>Create Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[outStyles.button]} onPress={()=> navigation.navigate('listTransactions')}>
                <Text style={[outStyles.buttonText,]}>Payment Scenario List </Text>
            </TouchableOpacity>
        </View>
    )
}

export default newPayment

const styles = StyleSheet.create({})
