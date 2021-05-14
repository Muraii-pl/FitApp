import React,{ useContext } from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header/Header'
import Calendary from '../components/Calendary/Calendary'
import Calories from '../components/Calories/Calories'
// import { StackNavigator } from 'react-navigation'
import {BMRContext} from '../context/BMRcontext'




const Home = props => {
    const {contextValue,setContextValue}= useContext(BMRContext)

    const { navigate } = props.navigation

    return (
        <>
            <Header nav={navigate}/>
            <Calendary/>
            <Calories/>
        </>
    )
}

export default Home
