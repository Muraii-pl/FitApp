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

        const {age,height,weight} = contextValue
        //const bmr = () => {
        //const plec;
        //const waga;
        //const wzrost;
        //const wiek;
        //const aktywnosc;
        //const pal = aktywnosc == 'Znikoma' ? 1.3 : aktywnosc == 'Bardzo mała' ? 1.5 : aktywnosc == 'Umiarkowana' ? 1.7 : aktywnosc == 'Duza' ? 1.9 : 2.4 
        //const cpm = plec == 'Male' ? ((9.99 * waga) + (6.25 * wzrost) - (4.92 * wiek) + 5) * pal : ((9.99 * waga) + (6.25 * wzrost) - (4.92 * wiek) - 161) * pal
        //return cpm;
    //}
    return (
        <>
            <Header nav={navigate}/>
            <Calendary/>
            <Calories/>
            <Text>{age + " " + height + " " + weight}</Text>
        </>
    )
}

export default Home
