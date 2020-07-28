import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Text, Item, Input, Icon, Label, Picker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const ccForm = () => {
    return (
        <Grid>
            <Row>
                <Col style={{ margin: 5, }}>
                    <Item floatingLabel>
                        <Label>Kredi Kartı</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Ad</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Tarih</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Cvv</Label>
                        <Input />
                    </Item>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={'value'}
                            onValueChange={'value'}
                        >
                            <Picker.Item label="Taksit" value="key0" />
                            <Picker.Item label="1" value="key1" />
                            <Picker.Item label="2" value="key2" />
                            <Picker.Item label="3" value="key3" />
                            <Picker.Item label="4" value="key4" />
                        </Picker>
                    </Item>
                    <Row size={0.1} style={{ backgroundColor: '#009253' }}>
                        <TouchableOpacity style={[styles.button,]}>
                            <Text style={[styles.center, styles.buttonText]}>ÖDEME YAP</Text>
                        </TouchableOpacity>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#009253',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
})

export default ccForm
