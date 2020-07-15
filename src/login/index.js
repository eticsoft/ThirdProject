import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export class index extends Component {
    render() {
        return (
            <Container>
        <Grid>
        <Row>
          <Col style={[styles.center, styles.red]}>
          <Image style={{ height: 100, }} resizeMode="contain" source={{uri: 'https://www.paraanaliz.com/wp-content/uploads/2019/02/emlak-logo.png',}}/>
          
          </Col>
        </Row>
        <Row>
        <Text style={{margin:5, textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        </Row>

          <Row>

          <Col style={[styles.center, styles.yellow]}>
          <TouchableOpacity style={[styles.button,]}>
            <Text style={[styles.buttonText,]}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,]}>
            <Text style={[styles.buttonText,]}>Yeni İş Yeri</Text>
          </TouchableOpacity>
          </Col>

          </Row>
        </Grid>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
    },
    red:{
        // backgroundColor:'red',
    },
    yellow:{
        // backgroundColor:'yellow',
    },
    black:{
        // backgroundColor:'black',
    },
    button:{
        backgroundColor:'#009253',
        margin:15,
        borderRadius:10,     
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        margin:15,
        
    }
})
export default index
