
import React,{useState, createContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Bio, Meel } from './screens'

import {BMRContext} from './context/BMRcontext'

const Stack = createStackNavigator()



const App = () => {

  const [value,setValue] = useState("Hi")

  
  return(
  <BMRContext.Provider value={ {value, setValue }}>
   <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       headerShown: false
     }}
     initialRouteName={"Home"}>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Bio" component={Bio}/>
     </Stack.Navigator>

   </NavigationContainer>
   </BMRContext.Provider>
  )
}

export default App;
