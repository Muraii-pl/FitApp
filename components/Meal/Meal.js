import React, { useState } from 'react';
import {View, Text, Pressable, Image,Animated} from 'react-native';
import {uparrow} from '../../constans/icon';
import styles from './MealStyle';
import ProductList from '../ProductList/ProductList'

const Meal = props => {
  const {mealnames} = props;
  const {HeaderWrapper, Icon, NameMeal, ValuesWrapper, ValuesNames} = styles;
  const [showProd,setShowProd] = useState(false)



  const Products = [{
          name:"Eggs",
          kcal:"480",
          carbs:'1,2 g',
          fat:'21,6 g',
          prot:'28.0 g'
      },
      {
        name:'Bread',
        kcal:"780",
        carbs:'26,2 g',
        fat:'1,9 g',
        prot:'1.4 g' 
      }
  ]
  const toogleProd = () => {
      setShowProd(!showProd)
  }
  return (
    <View>
      <View style={HeaderWrapper}>
        <Text style={NameMeal}>{mealnames}</Text>
        <Pressable style={{padding:5}} onPress={toogleProd}>
          <Image source={uparrow} style={Icon} />
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
      </View>
        {showProd ? Products.map(value => (<ProductList key={value.name} value={value}/>)) : null}
    </View>
  );
};

export default Meal;
