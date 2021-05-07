
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import Header from './components/Header/Header'
import Calendary from './components/Calendary/Calendary'
import Calories from './components/Calories/Calories'


const App = () => {
  return(
    <>
    <Header/>
    <Calendary/>
    <Calories/>
    </>
  )
}

export default App;
