import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Container, Header, Content, Button, Text, Item, Input, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


const register = ({ navigation }) => {
    return (
        <Container>
                <Grid>
                    <Row>
                        <Col>
                            <View style={[styles.boxCenter]}>
                                <Image style={{ height: 100, }} resizeMode='contain' source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png', }} />
                                <Text style={[styles.center,]}>Kayıt Ol</Text>
                            </View>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={[styles.boxCenter]}>
                            <Item>
                                <Input placeholder='Tc Kimlik' />
                            </Item>
                            <Item>
                                <Input placeholder='E-Posta' />
                            </Item>
                            <Item>
                                <Input placeholder='Şifre' />
                            </Item>
                            <Item>
                                <Input placeholder='Tekrar Şifre' />
                            </Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TouchableOpacity style={[styles.button,]}>
                                <Text style={[styles.buttonText,]}>Kayıt Ol</Text>
                            </TouchableOpacity>
                            {/* <Text style={[styles.center,]}>Don't have an account? create a new account!</Text> */}
                        </Col>
                    </Row>
                </Grid>
            </Container>
    )
}

export default register

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#009253',
        margin: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        margin: 15,

    },
    boxCenter: {
        justifyContent: 'center',
        flex: 1,
    }
})
