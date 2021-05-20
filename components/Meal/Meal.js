import React from 'react'
import { View, Text } from 'react-native'

const Meal = props => {
    const {mealnames} = props
    return (
        <View>
            <Text>{mealnames}</Text>
            <View>

            </View>
        </View>
    )
}

export default Meal


