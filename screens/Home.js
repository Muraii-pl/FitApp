import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header/Header'
import Calendary from '../components/Calendary/Calendary'
import Calories from '../components/Calories/Calories'
import { StackNavigator } from 'react-navigation'

const Home = props => {
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
