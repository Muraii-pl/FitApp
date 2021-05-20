import React from 'react'
import { View, Text, Modal as ModalR } from 'react-native'


const Modal = props => {
    const {visible} = props
    return (
        <ModalR visible = {visible} animationType = 'slide'>
        <View>
            <Text></Text>
        </View>
        </ModalR>
    )
}

export default Modal
