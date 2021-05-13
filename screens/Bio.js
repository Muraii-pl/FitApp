<<<<<<< HEAD
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
        
=======
import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native'

const Bio = () => {
    const [number, onChangeNumber] = useState(null);
    const [number2, onChangeNumber2] = useState(null);
    const [number3, onChangeNumber3] = useState(null);
    return (
        <View>
            <Text>Bio</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Age"
            keyboardType="numeric"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber2}
            value={number2}
            placeholder="Height"
            keyboardType="numeric"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber3}
            value={number3}
            placeholder="Weight"
            keyboardType="numeric"
            />
        </View>
>>>>>>> 63b68d75399937eba7b2df62253d8b55dac3eeb5
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
