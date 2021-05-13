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
