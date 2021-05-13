import React,{ useContext } from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header/Header'
import Calendary from '../components/Calendary/Calendary'
import Calories from '../components/Calories/Calories'
// import { StackNavigator } from 'react-navigation'
import {BMRContext} from '../context/BMRcontext'



const Home = props => {
    const {value, setValue}= useContext(BMRContext)

    const { navigate } = props.navigation
<<<<<<< HEAD

=======
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
>>>>>>> 63b68d75399937eba7b2df62253d8b55dac3eeb5
    return (
        <>
            <Header nav={navigate}/>
            <Calendary/>
            <Calories/>
            <Text>{value}</Text>
        </>
    )
}

export default Home
