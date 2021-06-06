import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Calendary from '../components/Calendary/Calendary';
import Calories from '../components/Calories/Calories';
// import { StackNavigator } from 'react-navigation'
import {BMRContext} from '../context/BMRcontext';
import Meal from '../components/Meal/Meal';
const MealList = [
  'breakfast',
  'second',
  'lunch',
  'dinner',
  'snack',
  'supper',
];

// const Products = [{
//           name:"Eggs",
//           kcal:"480",
//           carbs:'1,2 g',
//           fat:'21,6 g',
//           prot:'28.0 g'
//       },
//       {
//         name:'Bread',
//         kcal:"780",
//         carbs:'26,2 g',
//         fat:'1,9 g',
//         prot:'1.4 g' 
//       }
//   ]

const Home = props => {
  const {contextValue, setContextValue} = useContext(BMRContext);

  const {navigate} = props.navigation;

  return (
    <>
      <Header nav={navigate} />
      <Calendary />
      <Calories />
      <ScrollView>
        {MealList.map(value => (
          <Meal key={value} mealnames={value} />
        ))}
      </ScrollView>
    </>
  );
};

export default Home;
