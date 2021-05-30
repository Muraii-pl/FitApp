import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './ModalStyle';
import ProductList from '../ProductList/ProductList';
import {MealContext} from '../../context/MealContext';

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

  const [text, setText] = useState('');
  console.log(text);

  const handleChangeInput = event => {
    setText(event);
    //fetch('https://api.spoonacular.com/food/search?query=apple&number=2').then(data => console.log(data.json()))
    fetch("https://chomp.p.rapidapi.com/product-search.php?name=milk", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9f98e7f5bfmshb483e20ea81eebbp1bccf9jsn1f1df2eb1444",
		"x-rapidapi-host": "chomp.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  };

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
          onChangeText={handleChangeInput}
          defaultValue={text}></TextInput>
        <View>
          {Products.map(value => (
            <ProductList key={value.name} value={value} />
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ModalS;
