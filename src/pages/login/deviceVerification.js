import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item,CheckBox, ListItem, Body, } from 'native-base';

const deviceVerification = ({navigation}) => {
    return (
        <Container styles={{ flex: 1, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold',}}>Cihaz Doğrulama</Text>
                <Text style={{marginTop:15, fontSize:20, padding:10, }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </Text>
            </View>
            <View style={{ flex: 1, }}>
            <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Kabul Ediyorum</Text>
            </Body>
          </ListItem>
                <TouchableOpacity onPress={() => navigation.navigate('passwordReset')} style={[styles.button]}><Text style={[styles.buttonText]}> Devam </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

export default deviceVerification

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
