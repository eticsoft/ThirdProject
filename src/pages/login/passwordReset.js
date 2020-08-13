import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item, CheckBox, ListItem, Body, } from 'native-base';

const passwordReset = ({ navigation }) => {
    return (
        <Container styles={{ flex: 1, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Şifre Değiştir</Text>
            </View>
            <View style={{flex:1.5,}}>
                <Content>
                    <Item style={[styles.input]}>
                        <Input placeholder="Eski Şifre" />
                    </Item>
                    <Item style={[styles.input]}>
                        <Input placeholder="Yeni Şifre" />
                    </Item>
                    <Item style={[styles.input]}>
                        <Input placeholder="Yeni Şifre Tekrar" />
                    </Item>
                </Content>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button]}><Text style={[styles.buttonText]}> Tamam </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

export default passwordReset

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
    input: {
        margin: 10,
    }
})
