import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item, Form, Picker, Icon } from 'native-base';

const merchantSelect = ({ navigation }) => {
    return (
        <Container styles={{ flex: 1, }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>EticPOS</Text>
                <Text style={{ marginTop: 15, fontSize: 20, textAlign: 'center', }}>
                    Üye işyeri bilgisini seçiniz.
            </Text>
            </View>
            <View style={{ flex: 1, }}>
                <Content style={{ padding: 30 }}>
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            selectedValue={"key0"}
                            onValueChange={"Wallet"}
                        >
                            <Picker.Item label="0" value="key0" />
                            <Picker.Item label="1" value="key1" />
                            <Picker.Item label="2" value="key2" />
                            <Picker.Item label="3" value="key3" />
                            <Picker.Item label="4" value="key4" />
                        </Picker>
                    </Form>
                </Content>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={() => navigation.navigate('deviceVerification')} style={[styles.button]}><Text style={[styles.buttonText]}> Devam </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

export default merchantSelect

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
