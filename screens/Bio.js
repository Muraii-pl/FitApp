import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Modal, TouchableHighlight, Image, Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { arrow, edit } from '../constans/icon'

import {BMRContext} from '../context/BMRcontext'

const Bio = () => {
    const [metric, setMetric] = useState({
      age: "",
      height: "",
      weight: ""
    });
    const [modalOpen,setModalOpen] = useState(false)
    const { age,height,weight} = metric
    const {contextValue,setContextValue}= useContext(BMRContext)
    const [textShow,setTextShow] = useState(false)

    const bmrHandle = () => {
      if(!isNaN(age) && !isNaN(height) && !isNaN(weight)){
        setContextValue({"age":age,"height":height,"weight":weight})
        // setContextValue(...contextValue,height)
        // setContextValue(...contextValue,weight)
        setModalOpen(false)
      } else {
        setTextShow(true)
      }

    }

    return (
        <View>

          {/* Modal View */}
          

          <Modal visible={modalOpen} animationType='slide'>
            <View>
              <TouchableHighlight onPress={()=> setModalOpen(false)}>
                <Image source={arrow}/>
              </TouchableHighlight> 
                <Text>Age</Text><TextInput
            style={styles.input}
            onChangeText={value=> {
              setMetric({...metric,age:value})
            }}
            value={isNaN(metric.age) ?  null : metric.age }
            placeholder= {metric.age == "" ?  "Age" : metric.age }
            keyboardType="numeric"
            />


          <Text>Height</Text>
          <TextInput
            style={styles.input}
            onChangeText={value=> {
              setMetric({...metric,height:value})
            }}
            value={isNaN(metric.height) ?  null : metric.height }
            placeholder= {metric.height == "" ?  "Height" : metric.height }
            keyboardType="numeric"
            />

        <Text>Weight</Text>
          <TextInput
            style={styles.input}
            onChangeText={value=> {
              setMetric({...metric,weight:value})
            }}
            value={isNaN(metric.weight) ?  null : metric.weight }
            placeholder= {metric.weight == "" ?  "Weight" : metric.weight }
            keyboardType="numeric"
            />

            <Button title={"Accept"} onPress={bmrHandle}/>
            <Text>{textShow ?  "All date must be completed" : ""}</Text>
            </View>
          </Modal>

            <Text>Bio</Text> 
            <TouchableHighlight onPress={()=> {console.log(contextValue)
              setModalOpen(true)}}>
                <Image style={{height:24,
                width:24}}source={edit}/>
              </TouchableHighlight>
            

            {/* 
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

    <Picker
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="Kobieta" value="java" />
        <Picker.Item label="Mężczyzna" value="js" />
      </Picker> */}

      
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
