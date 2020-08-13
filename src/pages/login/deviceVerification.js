import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item } from 'native-base';

const deviceVerification = ({navigation}) => {
    return (
        <Container styles={{ flex: 1, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold',}}>EticPOS</Text>
                <Text style={{marginTop:15, fontSize:20, textAlign:'center', }}>
                    Cep telefonunuza gönderilen 6 haneli doğrulama kodunu giriniz.
                </Text>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={() => navigation.navigate('authPhone')} style={[styles.button]}><Text style={[styles.buttonText]}> Tekrar Gönder </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('merchantSelect')} style={[styles.button]}><Text style={[styles.buttonText]}> Devam </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

export default deviceVerification

const styles = StyleSheet.create({})
