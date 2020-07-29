import { Button, Text, View } from 'react-native';
import { decrement, increment } from './actions';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);

    return (
      <View style={{flex:1, padding:10, justifyContent:'center', alignItems: 'center'}}>
        <Button
        style={{marginVertical: 10}}
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile')
          // dispatch({type:'INCREMENT'})
        }
      />
      <Button
      style={{marginVertical: 10}}
        title="Increment"
        onPress={() =>
          // navigation.navigate('Profile')
          dispatch(increment(5))
        }
      />
      <Button
      style={{marginVertical: 10}}
        title="Decrement"
        onPress={() =>
          // navigation.navigate('Profile')
          dispatch(decrement(5))
        }
      />
      <Text>{count}</Text>
      </View>
    
    );
  };