import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './ModalStyle';
import ProductList from '../ProductList/ProductList';
import {MealContext} from '../../context/MealContext';
import axios from "axios"
import {appKey} from '../login'

const ModalS = props => {
  const {modalOpen, openModal, name} = props;
  const nameOfDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const numOfDay = new Date().getDate();
  const numOfWeekDay = new Date().getDay();
  const {BigText, LightText, SearchProduct, BackArrow} = styles;
  const [products,setProducts] = useState([])
  const [nutritions,setNutritions] = useState()

  const [text, setText] = useState('');
  //console.log(data.foods[1].foodNutrients[0])
  const handleChangeInput = async (event) => {
    await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${event.nativeEvent.text}&pageSize=10&api_key=${appKey}`)
    .then((response) => response.data)
    .then(data => {
      const productvalue = data.foods.map((value)=>{
        return ({
          'id':value.fdcId,
          'name':value.description,
          'protein':value.foodNutrients[0].value,
          'fat':value.foodNutrients[1].value,
          'carbs':value.foodNutrients[2].value,
          'calories':value.foodNutrients[3].value
        })
      })
      setProducts(productvalue)
    })
    .catch(error => console.log(error))
  }



  //0e7aaa87ba1946788b2c93deb83024a7

  const Products = [
    {
      name: 'Eggs',
      kcal: '480',
      carbs: '1,2 g',
      fat: '21,6 g',
      prot: '28.0 g',
    },
    {
      name: 'Bread',
      kcal: '780',
      carbs: '26,2 g',
      fat: '1,9 g',
      prot: '1.4 g',
    },
  ];

  return (
    <Modal visible={modalOpen} animationType="slide">
      <Pressable onPress={openModal}>
        <Text style={BackArrow}>←</Text>
      </Pressable>
      <View>
        <Text style={BigText}>{name}</Text>
        <Text style={LightText}>
          {nameOfDays[numOfWeekDay]} {numOfDay}
        </Text>
        <TextInput
          style={SearchProduct}
          placeholder="Search for a product"
          onChangeText={event => setText(event)}
          onSubmitEditing={handleChangeInput}
          defaultValue={text}></TextInput>
        <ScrollView>
        {
         products.map(value => {
           return (<View key={value.id}>

           <View><Text>{value.name}</Text></View>
            <View>
              <Text>{value.calories}kcal</Text>
              <Text>{value.protein} g</Text>
              <Text>{value.fat} g</Text>
              <Text>{value.carbs} g</Text>   
              </View>
             </View> )
         }) 
        }
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalS;
