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
