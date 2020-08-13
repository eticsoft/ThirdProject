import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item } from 'native-base';

const login = ({navigation}) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={[styles.logoImg]} source={{ uri: 'https://eticsoft.com/shop/img/eticsoft-logo-1578478953.jpg' }} />
                <Text style={[styles.logoText]}>İyi Günler</Text>
            </View>
            <View style={{ flex: 1, }}>
                <Item style={[styles.loginInputContainer]}>
                    <Input style={[styles.loginInput]} placeholder="Telefon Numarası" />
                </Item>
                <Item style={[styles.loginInputContainer]}>
                    <Input style={[styles.loginInput]} placeholder="Şifre" />
                </Item>
            </View>
            <View style={{ flex: 1, }}>
                <View style={{ flex: .5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('authPhone')} style={[styles.button]}><Text style={[styles.buttonText]}> Giriş </Text></TouchableOpacity>
                </View>
                <View style={[styles.registerContainer,{ flex: .5, }]}>
                    <TouchableOpacity><Text style={[styles.registerContainerText]}> Şifremi Unuttum </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={[styles.registerContainerText]}> Üye Ol </Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        height: 100,
        width: 100,
    },
    logoText: {
    },
    loginInputContainer: {
        // flexDirection: 'row',
    },
    loginInput: {
        margin: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
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
    registerContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
    },
    registerContainerText:{
        color:'#a1a1a1',
        fontWeight: 'bold',
        fontSize:15,
    },
})
