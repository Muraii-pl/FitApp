import React, {useState} from 'react'
import { View, Text, SafeAreaView,Image, Button, Pressable } from 'react-native'
import styles from './HeaderStyle'
import icon from '../../constans/icon'
import ModalS from '../ModalS/ModalS'

const Header = props => {
    const {HeaderBar,HeaderItem,HeaderIcon,HeaderPhoto} = styles
    const {menu_bars} = icon
    const {nav} = props
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
        
        <SafeAreaView style={HeaderBar}>
            <Pressable onPress={handleModal}><Image source={menu_bars} style={HeaderIcon} /></Pressable>

            <ModalS modalOpen={modalOpen} openModal={handleModal}/>

           
            <Text style={HeaderItem}>BeFit</Text>
            <Pressable style={HeaderPhoto} onPress={()=> {
                nav('Bio')}}></Pressable>
            
        </SafeAreaView>
    )
}

export default Header
