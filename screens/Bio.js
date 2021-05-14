import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Modal, TouchableHighlight, Image, Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { arrow, edit } from '../constans/icon'

import {BMRContext} from '../context/BMRcontext'

const Bio = () => {
    const [metric, setMetric] = useState({
      age: "",
      height: "",
      weight: "",
      gender: "",
      activity: "",
      kcal: "",
      carbs: "",
      fat: "",
      prot: ""
    });
    const [modalOpen,setModalOpen] = useState(false)
    const { age,height,weight,gender,activity} = metric
    const {contextValue,setContextValue}= useContext(BMRContext)
    const [textShow,setTextShow] = useState(false)
    const [selectedValue, setSelectedValue] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState(false)

    const bmrHandle = () => {
      if(!isNaN(parseInt(age)) && !isNaN(parseInt(height)) && !isNaN(parseInt(weight)) && String(gender) != '' && String(activity) != '') {
        const pal = activity == 'sedentary' ? 1.3 : activity == 'light' ? 1.5 : activity == 'moderative' ? 1.7 : activity == 'active' ? 1.9 : 2.4 
        const cpm = gender == 'male' ? ((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5) * pal : ((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161) * pal
        const carbs = Math.ceil((cpm*0.55)/4);
        const fat = Math.ceil((cpm*0.3)/9);
        const prot = Math.ceil((cpm*0.15)/4);
        setContextValue({"age":age,"height":height,"weight":weight,"gender":gender,"activity":activity,"kcal":parseInt(cpm),"carbs":carbs,"fat":fat,"prot":prot})
        setModalOpen(false)
        setTextShow(false)
        console.log(!isNaN(parseInt(age)) && !isNaN(parseInt(height)) && !isNaN(parseInt(weight)))
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
        <Text>Gender</Text>
            <Picker
            selectedValue={selectedValue}
            style={styles.input}
            onValueChange={itemValue => {
                setMetric({...metric,gender:itemValue})
                setSelectedValue(itemValue)
            }}
            value={metric.gender == '' ?  null : metric.gender }
            >
            <Picker.Item label="" value="" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
            </Picker>

        <Text>Activity</Text>
            <Picker
            selectedValue={selectedActivity}
            style={styles.input}
            onValueChange={itemValue => {
                setMetric({...metric,activity:itemValue})
                setSelectedActivity(itemValue)
            }}
            value={metric.activity == '' ?  null : metric.activity }
            >
            <Picker.Item label="" value="" />
            <Picker.Item label="Sedentary" value="sedentary" />
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Moderative" value="moderative" />
            <Picker.Item label="Active" value="active" />
            <Picker.Item label="Extra Active" value="extra active" />
            </Picker>

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
              <Text>Age: {age}</Text>
              <Text>Height: {height}</Text>
              <Text>Weight: {weight}</Text>
              <Text>Gender: {gender}</Text>
              <Text>Activity: {activity}</Text>

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
