
import React,{useState, createContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Bio, Meal, ModalS } from './screens'

import {BMRContext} from './context/BMRcontext'

import {MealContext} from './context/MealContext'

const Stack = createStackNavigator()



const App = () => {

  const [contextValue,setContextValue] = useState({
    age:"",
    height:"",
    weight:"",
    gender:"",
    activity:"",
    kcal: "",
    kcal2: "",
    carbs: "",
    carbs2: "",
    fat: "",
    fat2: "",
    prot: "",
    prot2: "",
    loss: 0
  })

  const [mcontextValue, setMContextValue] = useState ({
    breakfast: [],
    second: [],
    lunch: [],
    dinner: [],
    snack: [],
    supper: []
  })

  
  return(
  <BMRContext.Provider value={ {contextValue, setContextValue }}>
  <MealContext.Provider value= {{mcontextValue, setMContextValue}}>
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
   </MealContext.Provider>
   </BMRContext.Provider>
  )
}

export default App;
