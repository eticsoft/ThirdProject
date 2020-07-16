import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GetPaidButton from './component/getPaidButton'
import { Col, Row, Grid, Container } from 'react-native-easy-grid';


const numbers = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['C', '0', '<='],
]
const getPaid = () => {
    return (
        <Grid>
            <SafeAreaView style={styles.numbers}>
                <Row size={2}>
                    <Col style={{ backgroundColor: '#c1c1c1' }}></Col>
                </Row>
                {numbers.map((row, i) =>
                    <Row size={2} key={i} style={{ backgroundColor: '#fff' }}>
                        {row.map(char =>
                            <GetPaidButton key={char} char={char} />
                        )}
                    </Row>
                )}
            </SafeAreaView>
            <Row size={0.1} style={{ backgroundColor: '#009253' }}>
                <TouchableOpacity style={[styles.button,]}>
                    <Text style={[styles.center,styles.buttonText]}>ÖDEME AL</Text>
                </TouchableOpacity>
            </Row>
        </Grid>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    numbers: {
        flex: 1,
    },
    center: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#009253',
        borderRadius: 10,
        flex:1,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:20,
    },
})

export default getPaid
