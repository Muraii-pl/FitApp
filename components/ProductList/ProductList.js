import React from 'react'
import { View, Text,Image,Pressable } from 'react-native'
import {close} from '../../constans/icon';
import styles from './ProductListStyle'
const ProductList = (value) => {
    const {Icon,StyledWrapper,ProductName,ProductValue} = styles
    const {name,kcal,carbs,fat,prot} = value.value
    
    return (
        <View>
            <Text style={ProductName}>{name}</Text>
            <View style={StyledWrapper}>
                <View><Text style={ProductValue}>{kcal} kcal</Text></View>
                <View><Text style={ProductValue}>{carbs}</Text></View>
                <View><Text style={ProductValue}>{fat}</Text></View>
                <View><Text style={ProductValue}>{prot}</Text></View>
                <Pressable><Image source={close} style={Icon}/></Pressable><Image/>
            </View>
        </View>
    )
}

export default ProductList
