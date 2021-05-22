import React ,{ useEffect,useState } from 'react'
import { View, Text } from 'react-native'
import styles from './CalendaryStyle'




const Calendary = () => {

    const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    const [weekName, setWeekName] = useState([])
    const [weekNumber,setNumberName] = useState([])
    const month = new Date().getMonth()
    console.log(month)
    const numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    console.log(numOfDays[month])
    let newIndex = 1;
    let oldMonth = 1;
    let newWeek = 0;

useEffect(()=>{
    setWeekName([])
    setNumberName([])
    for (let index = -3; index < 3; index++) {
    console.log(index, days[new Date().getDay()+index])
        if (days.slice([new Date().getDay()+index])[0] != undefined){
            setWeekName(weekName => ([...weekName, days.slice([new Date().getDay()+index])[0]]))
        } else {
            setWeekName(weekName => ([...weekName, days[newWeek++]]))
    };

        if (new Date().getDate()+index+1 > numOfDays[month])  {
            setNumberName(weekNumber => ([...weekNumber, newIndex++]))
        } else if ((new Date().getDate()+index+1 <= 0) ) {
            if (new Date().getDate()+index+1 == 0){
            setNumberName(weekNumber => ([...weekNumber, numOfDays[month-1]]))}
            else {
                setNumberName(weekNumber => ([...weekNumber, numOfDays[month-1]-1]))
            }
        } else {
        setNumberName(weekNumber => ([...weekNumber, new Date().getDate()+index+1]))}
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
