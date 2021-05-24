import React ,{ useEffect,useState } from 'react'
import { View, Text } from 'react-native'
import styles from './CalendaryStyle'




const Calendary = () => {

    const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    const [weekName, setWeekName] = useState([])
    const [weekNumber,setNumberName] = useState([])
    const GetMonth = new Date().getMonth()
    const GetDay = new Date().getDay()
    const GetDate = new Date().getDate()
    const numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let newIndex = 1;
    let oldMonth = 1;
    let newWeek = 0;

useEffect(()=>{
    setWeekName([])
    setNumberName([])
    for (let index = -3; index < 3; index++) {
        if (days.slice([GetDay+index])[0] != undefined){
            setWeekName(weekName => ([...weekName, days.slice([GetDay+index])[0]]))
        } else {
            setWeekName(weekName => ([...weekName, days[newWeek++]]))
    };

        if (GetDate+index+1 > numOfDays[GetMonth])  {
            setNumberName(weekNumber => ([...weekNumber, newIndex++]))
        } else if ((GetDate+index+1 <= 0) ) {
            if (GetDate+index+1 == 0){
            setNumberName(weekNumber => ([...weekNumber, numOfDays[GetMonth-1]]))}
            else {
                setNumberName(weekNumber => ([...weekNumber, numOfDays[GetMonth-1]-1]))
            }
        } else {
        setNumberName(weekNumber => ([...weekNumber, GetDate+index+1]))}
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
