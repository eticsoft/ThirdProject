import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item } from 'native-base';

const authPhone = ({navigation}) => {
    return (
        <Container styles={{ flex: 1, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold',}}>EticPOS</Text>
                <Text style={{marginTop:15, fontSize:20, textAlign:'center', }}>
                    Cep telefonunuza gönderilen 6 haneli doğrulama kodunu giriniz.
                </Text>
            </View>
            <View style={{ flex: 1, }}>
                <Content style={{padding:30}}>
                    <Item>
                        <Input/>
                    </Item>
                </Content>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={() => navigation.navigate('authPhone')} style={[styles.button]}><Text style={[styles.buttonText]}> Tekrar Gönder </Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('merchantSelect')} style={[styles.button]}><Text style={[styles.buttonText]}> Devam </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

export default authPhone

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
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
