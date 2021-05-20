
import React,{useState, createContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Bio, Meal,  } from './screens'

import {BMRContext} from './context/BMRcontext'

const Stack = createStackNavigator()



const App = () => {

  const [contextValue,setContextValue] = useState({
    age:"",
    height:"",
    weight:"",
    gender:"",
    activity:"",
    kcal: "",
    carbs: "",
    fat: "",
    prot: "",
    loss: 0
  })

  
  return(
  <BMRContext.Provider value={ {contextValue, setContextValue }}>
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
