import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'
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

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });
  

export default Bio
