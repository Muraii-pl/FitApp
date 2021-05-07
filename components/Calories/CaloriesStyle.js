import {
    StyleSheet,
    Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    CaloriesWrapper:{
        width:windowWidth,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    DemandWrapper:{
        width:windowWidth,
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    DemandItem:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    LightText:{
        color:'#a6a5a2',
        textAlign:'center',
        fontFamily:'IndieFlower',
        fontSize:10
    },
    CaloriesText:{
        textAlign:'center',
        fontFamily:'IndieFlower',
        fontSize:12
    },
    BigText:{
        textAlign:'center',
        fontFamily:'IndieFlower',
        fontSize:28,
        color:'#32CD32'
    }
})

export default styles