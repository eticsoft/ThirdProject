import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Content, Button, Text, Item, Input, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const Login = ({ navigation }) => {
    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <View style={[styles.boxCenter]}>
                            <Image style={{ height: 100, }} resizeMode='contain' source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png', }} />
                            <Text style={[styles.center,]}>Giriş Yap</Text>
                        </View>
                    </Col>
                </Row>

                <Row>
                    <Col style={[styles.boxCenter]}>
                        <Item>
                            <Input placeholder='E-posta' />
                        </Item>
                        <Item>
                            <Input placeholder='Şifre' />
                        </Item>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeDashboard')} style={[styles.button,]}>
                            <Text style={[styles.buttonText,]}>Giriş Yap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[styles.button,]}>
                            <Text style={[styles.buttonText,]}>Kayıt Ol</Text>
                        </TouchableOpacity>

                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

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

export default Login

