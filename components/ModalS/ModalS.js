import React, {useState} from 'react'
 import { View, Text, Modal, Pressable, TextInput, FlatList, SafeAreaView } from 'react-native'
 import styles from './ModalStyle'
 import ProductList from '../ProductList/ProductList'


 const ModalS = props => {
     const {modalOpen,openModal} = props
     const nameOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
     const numOfDay = new Date().getDate()
     const numOfWeekDay = new Date().getDay()
     const {BigText, LightText, SearchProduct, BackArrow} = styles

     const [text, setText] = useState('');
     console.log(text)

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
    }]
    
     return (
         <Modal visible = {modalOpen} animationType = 'slide'>
             <Pressable onPress={openModal}><Text style={BackArrow}>←</Text></Pressable>
         <View> 
            <Text style={BigText}>Breakfast</Text>
            <Text style ={LightText}>{nameOfDays[numOfWeekDay]} {numOfDay}</Text>
            <TextInput
            style={SearchProduct}
            placeholder = 'Search for a product'
            onChangeText={text => setText(text)}
            defaultValue={text}
            ></TextInput>
            <View>
            {Products.map(value => (<ProductList key={value.name} value={value}/>))}
            </View>
         </View>
         </Modal>
     )
 }


 export default ModalS
