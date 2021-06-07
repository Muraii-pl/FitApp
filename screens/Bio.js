import React, {useState, useContext} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {arrow, edit} from '../constans/icon';
import {BMRContext} from '../context/BMRcontext';

const Bio = () => {
  const {contextValue, setContextValue} = useContext(BMRContext);
  const {age, height, weight, gender, activity, loss} = contextValue;
  const [metric, setMetric] = useState({
    mage: age,
    mheight: height,
    mweight: weight,
    mgender: gender,
    mactivity: activity,
    kcal: '',
    carbs: '',
    fat: '',
    prot: '',
    mloss: loss,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const {mage, mheight, mweight, mgender, mactivity, mloss} = metric;
  const [textShow, setTextShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(false);

  const inc = () => {
    if (mloss < 1) {
      setMetric({...metric, mloss: parseFloat((mloss + 0.1).toFixed(1))});
    }
  };

  const dec = () => {
    if (mloss > 0) {
      setMetric({...metric, mloss: parseFloat((mloss - 0.1).toFixed(1))});
    }
  };

  const bmrHandle = () => {
    if (
      !isNaN(parseInt(mage)) &&
      !isNaN(parseInt(mheight)) &&
      !isNaN(parseInt(mweight)) &&
      String(mgender) != '' &&
      String(mactivity) != ''
    ) {
      const pal =
        mactivity == 'sedentary'
          ? 1.3
          : mactivity == 'light'
          ? 1.4
          : mactivity == 'moderative'
          ? 1.5
          : mactivity == 'active'
          ? 1.6
          : 1.7;
      const cpm =
        mgender == 'male'
          ? (9.99 * mweight + 6.25 * mheight - 4.92 * mage + 5) * pal -
            mloss * 1000
          : (9.99 * mweight + 6.25 * mheight - 4.92 * mage - 161) * pal -
            mloss * 1000;
      const carbs = Math.ceil((cpm * 0.55) / 4);
      const fat = Math.ceil((cpm * 0.3) / 9);
      const prot = Math.ceil((cpm * 0.15) / 4);
      setContextValue({
        age: mage,
        height: mheight,
        weight: mweight,
        gender: mgender,
        activity: mactivity,
        kcal: parseInt(cpm),
        kcal2: parseInt(cpm),
        carbs: carbs,
        carbs2: carbs,
        fat: fat,
        fat2: fat,
        prot: prot,
        prot2: prot,
        loss: mloss,
      });
      setModalOpen(false);
      setTextShow(false);
    } else {
      setTextShow(true);
    }
  };

  return (
    <View>
      {/* Modal View */}

      <Modal visible={modalOpen} animationType="slide">
        <ScrollView>
          <View style={{paddingBottom: 40}}>
            <TouchableHighlight onPress={() => setModalOpen(false)}>
              <Image source={arrow} />
            </TouchableHighlight>
            <Text>Age</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setMetric({...metric, mage: value});
              }}
              value={isNaN(metric.mage) ? null : metric.mage}
              placeholder={metric.mage == '' ? 'Age' : metric.mage}
              keyboardType="numeric"
            />

            <Text>Height</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setMetric({...metric, mheight: value});
              }}
              value={isNaN(metric.mheight) ? null : metric.mheight}
              placeholder={metric.mheight == '' ? 'Height' : metric.mheight}
              keyboardType="numeric"
            />

            <Text>Weight</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setMetric({...metric, mweight: value});
              }}
              value={isNaN(metric.mweight) ? null : metric.mweight}
              placeholder={metric.mweight == '' ? 'Weight' : metric.mweight}
              keyboardType="numeric"
            />
            <Text>Gender</Text>
            <Picker
              selectedValue={gender}
              style={styles.input}
              onValueChange={itemValue => {
                setMetric({...metric, mgender: itemValue});
                setSelectedValue(itemValue);
              }}
              value={metric.mgender == '' ? null : metric.mgender}>
              <Picker.Item label="" value="" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
            </Picker>

            <Text>Activity</Text>
            <Picker
              selectedValue={activity}
              style={styles.input}
              onValueChange={itemValue => {
                setMetric({...metric, mactivity: itemValue});
                setSelectedActivity(itemValue);
              }}
              value={metric.mactivity == '' ? null : metric.mactivity}>
              <Picker.Item label="" value="" />
              <Picker.Item label="Sedentary" value="sedentary" />
              <Picker.Item label="Light" value="light" />
              <Picker.Item label="Moderative" value="moderative" />
              <Picker.Item label="Active" value="active" />
              <Picker.Item label="Extra Active" value="extra active" />
            </Picker>

            <Text>Weight Loss per Week</Text>
            <View style={styles.weightLoss}>
              <Button style={styles.butt} title={'-'} onPress={dec} />
              <Text style={styles.loss}>{mloss}</Text>
              <Button style={styles.butt} title={'+'} onPress={inc} />
            </View>

            <Button
              style={styles.accept}
              title={'Accept'}
              onPress={bmrHandle}
            />
            <Text>{textShow ? 'All date must be completed' : ''}</Text>
          </View>
        </ScrollView>
      </Modal>
      <Text style={styles.headline}>Bio</Text>
      <Text style={styles.info}>Age: {mage}</Text>
      <Text style={styles.info}>Height: {mheight}</Text>
      <Text style={styles.info}>Weight: {mweight}</Text>
      <Text style={styles.info}>Gender: {mgender}</Text>
      <Text style={styles.info}>Activity: {mactivity}</Text>
      <Text style={styles.info}>Weight loss per Week: {mloss}</Text>
      <TouchableHighlight
        style={{justifycontent: 'center'}}
        onPress={() => {
          setModalOpen(true);
        }}>
        <Image
          style={{height: 24, width: 24, alignItems: 'center'}}
          source={edit}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

  weightLoss: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  loss: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10,
  },

  butt: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  accept: {
    height: 50,
    marginBottom: 30,
    padding: 20,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  headline: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'IndieFlower',
    marginTop: 0,
  },

  info: {
    fontSize: 16,
    fontFamily: 'IndieFlower',
    height: 40,
    margin: 12,
  },

  changeButton: {
    textAlign: 'center',
  },
});

export default Bio;