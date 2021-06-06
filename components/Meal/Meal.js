import React, { useState, useContext } from 'react';
import {View, Text, Pressable, Image,Animated} from 'react-native';
import {uparrow, add} from '../../constans/icon';
import styles from './MealStyle';
import ProductList from '../ProductList/ProductList'
import ModalS from '../ModalS/ModalS'
import {MealContext} from '../../context/MealContext'

const Meal = props => {
  const {mealnames} = props;
  const {HeaderWrapper, Icon, NameMeal, ValuesWrapper, ValuesNames} = styles;
  const [showProd,setShowProd] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const {mcontextValue, setMContextValue} = useContext(MealContext)
  const {breakfast,
  second,
  lunch,
  dinner,
  snack,
  supper} = mcontextValue

  const [ind,setInd] = useState(0);

  const [meals, setMeals] = useState([
    breakfast,
    second,
    lunch,
    dinner,
    snack,
    supper
  ])

  const MealList = [
    'breakfast',
    'second',
    'lunch',
    'dinner',
    'snack',
    'supper',
  ];

  const toogleProd = () => {
    setInd(MealList.indexOf(mealnames))
      setShowProd(!showProd)
  }

  const toGoModal = () => {
      setModalOpen(!modalOpen)
  }
  return (
    <View>
      <View style={HeaderWrapper}>
        <Text style={NameMeal}>{mealnames}</Text>
        <Pressable style={{padding:5}} onPress={toogleProd}>
          <Image source={uparrow} style={Icon} />
        </Pressable>
        <Pressable style={{padding:5}} onPress={toGoModal}>
          <Image source={add} style={Icon}/>
        </Pressable>
      </View>
      <View style={ValuesWrapper}>
        <View>
          <Text style={{...ValuesNames, color: '#32CD32'}}>1250 kcal</Text>
        </View>
        <View>
          <Text style={ValuesNames}>28.0 g</Text>
        </View>
        <View>
          <Text style={ValuesNames}>23.0 g</Text>
        </View>
        <View>
          <Text style={ValuesNames}>29.6 g</Text>
        </View>
        <ModalS modalOpen={modalOpen} openModal={toGoModal} name={mealnames}/>
      </View>
        {showProd ? meals[ind].map(value => (<ProductList key={value.name} value={value}/>)) : null}
    </View>
    
  );
};

export default Meal;
