import React from 'react'
import { View, Text, SafeAreaView,Image, Button, Pressable } from 'react-native'
import styles from './HeaderStyle'
import icon from '../../constans/icon'

const Header = props => {
    const {HeaderBar,HeaderItem,HeaderIcon,HeaderPhoto} = styles
    const {menu_bars} = icon
    const {nav} = props
    return (
        
        <SafeAreaView style={HeaderBar}>
            <Image source={menu_bars} style={HeaderIcon}/>
            <Text style={HeaderItem}>FattyCount</Text>
            <Pressable style={HeaderPhoto} onPress={()=> {
                nav('Bio')}}></Pressable>
            
        </SafeAreaView>
    )
}

export default Header
