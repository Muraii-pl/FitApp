import React from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

const Calories = () => {
    return (
        <View>
            <View><Text>Calories left</Text></View>
            <View><Text>1.480</Text><Text>kcal</Text></View>
            <View>
                <View>
                    <ProgressCircle percent={30}
                                    radius={20}
                                    borderWidth={5}
                                    color="#6900fc"
                                    shadowColor="#999"
                                    bgColor="#fff"/>
                                    <View>
                                        <Text>Carbs</Text>
                                        <Text>70g left</Text>
                                    </View>
                </View>
                <View>
                <ProgressCircle percent={55}
                                    radius={20}
                                    borderWidth={5}
                                    color="#f5b800"
                                    shadowColor="#999"
                                    bgColor="#fff"/>
                                    <View>
                                        <Text>Fat</Text>
                                        <Text>26g left</Text>
                                    </View>
                </View>
                <View>
                <ProgressCircle percent={90}
                                    radius={20}
                                    borderWidth={5}
                                    color="#3399FF"
                                    shadowColor="#999"
                                    bgColor="#fff"/>
                                    <View>
                                        <Text>Protein</Text>
                                        <Text>58g left</Text>
                                    </View>
                </View>
            </View>
        </View>
    )
}

export default Calories


{/* <ProgressCircle
percent={30}
radius={20}
borderWidth={5}
color="#3399FF"
shadowColor="#999"
bgColor="#fff"
/> */}