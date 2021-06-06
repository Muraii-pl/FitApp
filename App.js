
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
    carbs: "",
    fat: "",
    prot: "",
    loss: 0
  })

  const [mcontextValue, setMContextValue] = useState ({
    breakfast: [{
      name:"Eggs",
      kcal:"480",
      carbs:'1,2 g',
      fat:'21,6 g',
      prot:'28.0 g'
  }],
    second: [],
    lunch: [],
    dinner: [],
    snack: [{
      name:'Bread',
      kcal:"780",
      carbs:'26,2 g',
      fat:'1,9 g',
      prot:'1.4 g' 
      },{
        name:"Eggs",
        kcal:"480",
        carbs:'1,2 g',
        fat:'21,6 g',
        prot:'28.0 g'
    }],
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
