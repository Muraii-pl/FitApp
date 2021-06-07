import React,{ useContext } from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import styles from './CaloriesStyle'
import {BMRContext} from '../../context/BMRcontext'

const Calories = () => {
    const {contextValue,setContextValue}= useContext(BMRContext)
    const {kcal,carbs,fat,prot,carbs2,fat2,prot2} = contextValue
    const {CaloriesWrapper,DemandWrapper,DemandItem,LightText,CaloriesText,BigText} = styles
    return (
        <View style={CaloriesWrapper}>
            <View><Text style={LightText}>Calories left</Text></View>
            <View style={DemandItem}><Text style={BigText}>{kcal}</Text><Text style={{...BigText,color:'#000'}}> kcal</Text></View>
            <View style={DemandWrapper}>
                <View style={DemandItem}>
                    <ProgressCircle percent={((carbs2-carbs)/carbs2)*100}
                                    radius={20}
                                    borderWidth={5}
                                    color="#6900fc"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Carbs</Text>
                                        <Text style={LightText}>{carbs}g left</Text>
                                    </View>
                </View>
                <View style={DemandItem}>
                <ProgressCircle percent={((fat2-fat)/fat2)*100}
                                    radius={20}
                                    borderWidth={5}
                                    color="#f5b800"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Fat</Text>
                                        <Text style={LightText}>{fat}g left</Text>
                                    </View>
                </View>
                <View style={DemandItem}>
                <ProgressCircle percent={((prot2-prot)/prot2)*100}
                                    radius={20}
                                    borderWidth={5}
                                    color="#3399FF"
                                    shadowColor="#fff"
                                    bgColor="#fff"/>
                                    <View style={{marginLeft:5}}>
                                        <Text style={CaloriesText}>Protein</Text>
                                        <Text style={LightText}>{prot}g left</Text>
                                    </View>
                </View>
            </View>
        </View>
    )
}

export default Calories


