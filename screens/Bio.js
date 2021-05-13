import React, { useContext } from 'react'
import { View, Text, TextInput} from 'react-native'
import {BMRContext} from '../context/BMRcontext'

 


const Bio = () => {
    const {value,setValue} = useContext(BMRContext)
    const dataHandle = () => {
        setValue("Zmiana")
    }
    return (
        
        <>
            <View>
                <Text>Bio</Text>
                <TextInput onChangeText={dataHandle} />
            </View>
        </>
        
    )
}

export default Bio
