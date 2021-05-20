import React from 'react'
import { View, Text, Modal, Pressable } from 'react-native'


const ModalS = props => {
    const {modalOpen,openModal} = props
    return (
        <Modal visible = {modalOpen} animationType = 'slide'>
            <Pressable onPress={openModal}><Text>X</Text></Pressable>
        <View>
            <Text></Text>
        </View>
        </Modal>
    )
}


export default ModalS
