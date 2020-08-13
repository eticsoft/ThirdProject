import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item,CheckBox, ListItem, Body, } from 'native-base';

const register = ({navigation}) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex:1, alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>
                    EticPOS
                </Text>
                <Text style={{ fontSize:18,textAlign: 'center'}}>
                    İstediğiniz yerden Etic Pos'a başvurun, cep telefonunuzdan ödeme almanın keyfini yaşayın!
                </Text>
            </View> 
            <View style={{ flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate('authPhone')} style={[styles.button]}><Text style={[styles.buttonText]}> Etic Katılımlıyım </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('newCustomerForm')} style={[styles.button]}><Text style={[styles.buttonText]}> Etic Katılımlı olmak istiyorum </Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default register

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#92d36e',
        padding: 25,
        width: '80%',
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
    },
})
