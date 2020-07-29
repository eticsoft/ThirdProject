/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import {
  ActivityIndicator,
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import CounterReducer from './src/reducers/CounterReducer';
import { HomeScreen } from './src/home_screen';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from './src/profile_screen';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Stack = createStackNavigator();

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App: () => React$Node = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });


  // Animation part 
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 5000 }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 5000 }).start();
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{ title: 'Jane Profile' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // ///Fetch api
    //  <View style={{flex:1, padding:40}}>
    //       {isLoading ? <ActivityIndicator/> : 
    //       <FlatList 
    //         data={data} 
    //         keyExtractor={({id}, index) => id} 
    //         renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
    //         />}
    //     </View> 



    ///Animation
    // <View style={{marginVertical:50}}>
    //   <Animated.View style={{ backgroundColor:'black', opacity: fadeAnim, width:100, height:100}}>
    //     <Text>I am fading</Text>
    //   </Animated.View>
    //   <Button title='Fade in' onPress={fadeIn}/>
    //   <Button title='Fade out' onPress={fadeOut}/>
    // </View>


    ////////////Dimension
    // <SafeAreaView>
    //   <View style={{ padding: 50 }}>
    //     <Text>'Window width is {dimensions.window.width}'</Text>
    //     <Text>'Window Height is {dimensions.window.height}'</Text>
    //     <Text>'Screen width is {dimensions.screen.width}'</Text>
    //     <Text>'Screen Height is {dimensions.screen.height}'</Text>
    //   </View>
    // </SafeAreaView>

    //Image
    // <View>
    //   <Image
    //     style={{ width: 100, height: 100 }}
    //     source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    //   />
    // </View>


    //SectionList
    // <SafeAreaView style={styles.container}>
    //   <SectionList
    //     sections={[
    //       {
    //         title: "Main dishes",
    //         data: ["Pizza", "Burger", "Risotto"]
    //       },
    //       {
    //         title: "Sides",
    //         data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    //       },
    //       {
    //         title: "Drinks",
    //         data: ["Water", "Coke", "Beer"]
    //       },
    //       {
    //         title: "Desserts",
    //         data: ["Cheese Cake", "Ice Cream"]
    //       }
    //     ]}
    //     keyExtractor={(item, index) => item + index}
    //     renderItem={(item) => (<Text>{item.item}</Text>)}
    //     renderSectionHeader={({ section: { title } }) => (
    //       <Text style={styles.header}>{title}</Text>
    //     )}
    //   />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
});




export default App;
