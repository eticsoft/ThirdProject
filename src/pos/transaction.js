import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ListView, FlatList, StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';
import apiClient from '../lib/apiClient'

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//   });
const apiClients = new apiClient();

console.log(apiClients.conSol("assdaad"))

export class transaction extends Component {
  render() {
    return (
      <View>
        {/* <Text style={{backgroundColor:'purple',}}>
            <Grid>
              <Row style={{backgroundColor:'red'}}>
                <Col size={5} style={{backgroundColor:'yellow'}}><Text>22</Text></Col>
                <Col size={3} style={{backgroundColor:'blue'}}>
                <Text>14:20</Text>
                <Text>Tek Çekim</Text>
                <Text>Başarılı</Text>
                </Col>
                <Col size={3} style={{backgroundColor:'grey'}}>
                <Text>BKM Express</Text>
                <Text>5 TL</Text>
                <Text>8768468</Text>
                </Col>
              </Row>
            </Grid>
            </Text> */}
        <FlatList
          data={[
            { key: 'Devin',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
            { key: 'Devin1',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
            { key: 'Devin2',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
            { key: 'Devin3',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
            { key: 'Devin4',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
            { key: 'Devin5',date:22, hour: '14:20', inst: 'Tek çekim', status: 'Başarılı', bank: 'BKM Expres', amount: '5 TL', process:'81238231' },
          ]}
          renderItem={({ item }) =>
            <Row style={{ backgroundColor:'#c8c8c8', margin:5, }}>
              <Col size={1} style={styles.date}><Text style={styles.dateText}>{item.date}</Text></Col>
              <Col style={{marginLeft:5,}} size={3}>
                <Text>{item.hour}</Text>
                <Text>{item.inst}</Text>
                <Text>{item.status}</Text>
              </Col>
              <Col size={3} style={{ alignItems:'flex-end'}}>
                <Text>{item.bank}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.process}</Text>
              </Col>
            </Row>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  date:{
    justifyContent: 'center',
    backgroundColor:'green'
  },
  dateText:{
    textAlign: "center",
    fontSize: 20,
    color:'white',
  },
  bank:{

  }
})

export default transaction
