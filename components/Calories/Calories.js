import React,{ useContext } from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import styles from './CaloriesStyle'
import {BMRContext} from '../../context/BMRcontext'

const Calories = () => {
    const {contextValue,setContextValue}= useContext(BMRContext)
    const {age,height,weight,gender,activity,kcal} = contextValue
    const {CaloriesWrapper,DemandWrapper,DemandItem,LightText,CaloriesText,BigText} = styles
    return (
        <View style={CaloriesWrapper}>
            <View><Text style={LightText}>Calories left</Text></View>
            <View style={DemandItem}><Text style={BigText}>{kcal}</Text><Text style={{...BigText,color:'#000'}}> kcal</Text></View>
            <View style={DemandWrapper}>
                <View style={DemandItem}>
                    <ProgressCircle percent={30}
                                    radius={20}
                                    borderWidth={5}
                                    color="#6900fc"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Carbs</Text>
                                        <Text style={LightText}>70g left</Text>
                                    </View>
                </View>
                <View style={DemandItem}>
                <ProgressCircle percent={55}
                                    radius={20}
                                    borderWidth={5}
                                    color="#f5b800"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Fat</Text>
                                        <Text style={LightText}>26g left</Text>
                                    </View>
                </View>
                <View style={DemandItem}>
                <ProgressCircle percent={90}
                                    radius={20}
                                    borderWidth={5}
                                    color="#3399FF"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Protein</Text>
                                        <Text style={LightText}>58g left</Text>
                                    </View>
                </View>
            </View>
        </View>
    )
}

export default Calories


