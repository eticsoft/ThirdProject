import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item, CheckBox, ListItem, Body, Picker, Form, Icon } from 'native-base';


const newCustomerForm = ({navigation}) => {
    return (
        <Container styles={{ flex: 1, }}>
        <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Başvuru Formu</Text>
        </View>
        <View style={{flex:2,}}>
            <Content>
                <Item style={[styles.input]}>
                    <Input placeholder="Ad" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="Soyad" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="Firma Ünvanı" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="Telefon Numarası" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="E-Posta Adresi" />
                </Item>
                <Form>
                        <Picker
                            style={[styles.input]}
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            selectedValue={"key0"}
                            onValueChange={"Wallet"}
                        >
                            <Picker.Item label="Bulunduğu Şehir" value="key0" />
                            <Picker.Item label="1" value="key1" />
                            <Picker.Item label="2" value="key2" />
                            <Picker.Item label="3" value="key3" />
                            <Picker.Item label="4" value="key4" />
                        </Picker>
                        <Picker
                            style={[styles.input]}
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            selectedValue={"key0"}
                            onValueChange={"Wallet"}
                        >
                            <Picker.Item label="Bulunduğu İlçe" value="key0" />
                            <Picker.Item label="1" value="key1" />
                            <Picker.Item label="2" value="key2" />
                            <Picker.Item label="3" value="key3" />
                            <Picker.Item label="4" value="key4" />
                        </Picker>
                    </Form>
            </Content>
        </View>
        <View style={{ flex: .5, }}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button]}><Text style={[styles.buttonText]}> Tamam </Text></TouchableOpacity>
        </View>
    </Container>
    )
}

export default newCustomerForm

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
