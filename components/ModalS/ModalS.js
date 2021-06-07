import React, {useState, useContext} from 'react';
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
import {BMRContext} from '../../context/BMRcontext';

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
  const {mcontextValue, setMContextValue} = useContext(MealContext)

  const {contextValue, setContextValue} = useContext(BMRContext);
  const {age, height, weight, gender, activity, loss, kcal, carbs, fat, prot, kcal2, carbs2, fat2, prot2} = contextValue;
  

  const {breakfast,
    second,
    lunch,
    dinner,
    snack,
    supper} = mcontextValue
  
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

  const [ind,setInd] = useState(MealList.indexOf(name));

  const [text, setText] = useState('');
  //console.log(data.foods[1].foodNutrients[0])
  //console.log(meals)
  const handleChangeInput = async (event) => {
    await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${event.nativeEvent.text}&pageSize=10&api_key=E96G3Qj8b6tBhzoZYSKRaWMSqmMs87Gr8CkJWJ6h`)
    .then((response) => response.data)
    .then(data => {
      //console.log(data.foods[3].foodNutrients)

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

  console.log(contextValue)

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
           return (<View key={value.id} onStartShouldSetResponder ={() => {
             meals[ind].push({
              name: `${value.name}`,
              kcal: `${value.calories}`,
              carbs: `${value.carbs} g`,
              fat: `${value.fat} g`,
              prot: `${value.protein} g`,
            })
            setContextValue({kcal:parseFloat((kcal-value.calories).toFixed(1)),
            carbs:parseFloat((carbs-value.carbs).toFixed(1)),
            fat:parseFloat((fat-value.fat).toFixed(1)),
            prot:parseFloat((prot-value.protein).toFixed(1)),
            age:age,
            height:height,
            weight:weight,
            gender:gender,
            activity:activity,
            loss:loss,
            kcal2: kcal2,
            carbs2: carbs2,
            fat2: fat2,
            prot2:prot2})
           }}>

           <View><Text>{value.name}</Text></View>
            <View>
              <Text>{value.calories}kcal</Text>
              <Text>{value.protein} g</Text>
              <Text>{value.fat} g</Text>
              <Text>{value.carbs} g</Text>
              <Text>------------------------------------------------------------------------------------------------------------</Text>   
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
