import React ,{ useEffect,useState } from 'react'
import { View, Text } from 'react-native'
import styles from './CalendaryStyle'




const Calendary = () => {

    const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    const [weekName, setWeekName] = useState([])
    const [weekNumber,setNumberName] = useState([])






useEffect(()=>{
    setWeekName([])
    setNumberName([])
    for (let index = -3; index < 2; index++) {
        setWeekName(weekName => ([...weekName, days[new Date().getDay()+index]]))
        console.log(new Date().getDay())
        setNumberName(weekNumber => ([...weekNumber, new Date().getDate()+index+1]))
    }
},[])

    const {CalendaryWrapper,DayWrapper,DayNumberWrapper,DayText} = styles
 


    return (
        <View style={CalendaryWrapper}>
            {weekName.map((value,index) => {
                return(
                    <View key={index} style={{...DayWrapper, backgroundColor:index==2?'#32CD32':'white'}} >
                        <Text style={DayText}>{value}</Text>
                        <View style={DayNumberWrapper}>
                            <Text style={{...DayText,fontSize:14}}>{weekNumber[index]}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default Calendary
