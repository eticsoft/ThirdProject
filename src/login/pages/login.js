import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Text, Item, Input, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export class login extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row style={{ backgroundColor: 'red' }}>
                        <Col>
                            <Image style={{ height: 100, }} resizeMode='contain' source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png', }} />
                            <Text>Welcome Back</Text>
                            <Text>Sign in continue</Text>
                        </Col>
                    </Row>

                    <Row style={{ backgroundColor: 'yellow' }}>
                        <Col>
                            <Item>
                                <Icon active name='home' />
                                <Input placeholder='Icon Textbox' />
                            </Item>
                            <Item>
                                <Icon active name='home' />
                                <Input placeholder='Icon Textbox' />
                            </Item>
                        </Col>
                    </Row>

                    <Row style={{ backgroundColor: 'blue' }}>
                        <Col>
                            <TouchableOpacity>
                                <Text style={{}}>LOGIN</Text>
                            </TouchableOpacity>
                            <Text>Don't have an account? create a new account!</Text>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

export default login
