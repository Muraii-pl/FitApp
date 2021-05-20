import React, {useState} from 'react'
import { View, Text, SafeAreaView,Image, Button, Pressable } from 'react-native'
import styles from './HeaderStyle'
import icon from '../../constans/icon'
import Modal from '../Modal/Modal'

const Header = props => {
    const {HeaderBar,HeaderItem,HeaderIcon,HeaderPhoto} = styles
    const {menu_bars} = icon
    const {nav} = props
    const [modalOpen, setModalOpen] = useState(false)
    return (
        
        <SafeAreaView style={HeaderBar}>
            <Image source={menu_bars} style={HeaderIcon} onPress={() =>
            setModalOpen(true)}/>

            <Modal visible = {modalOpen}>

            </Modal>
            <Text style={HeaderItem}>BeFit</Text>
            <Pressable style={HeaderPhoto} onPress={()=> {
                nav('Bio')}}></Pressable>
            
        </SafeAreaView>
    )
}

export default Header
