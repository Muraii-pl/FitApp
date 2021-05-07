import React from 'react'
import { View, Text, SafeAreaView,Image } from 'react-native'
import styles from './HeaderStyle'
import icon from '../../constans/icon'

const Header = () => {
    const {HeaderBar,HeaderItem,HeaderIcon,HeaderPhoto} = styles
    const {menu_bars} = icon
    return (
        <SafeAreaView style={HeaderBar}>
            <Image source={menu_bars} style={HeaderIcon}/>
            <Text style={HeaderItem}>FattyCount</Text>
            <Text style={HeaderPhoto}></Text>
            
        </SafeAreaView>
    )
}

export default Header
