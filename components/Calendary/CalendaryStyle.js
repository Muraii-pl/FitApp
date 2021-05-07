import {
    StyleSheet,
    Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

    CalendaryWrapper:{
        width:windowWidth,
        height:50,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        flexDirection:'row',
        paddingHorizontal:10,
        
    },
    DayWrapper:{
        width:35,
        height:60,
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column',
        paddingVertical:5,
        borderRadius:35
        
    },
    DayNumberWrapper:{
        width:25,
        height:25,
        backgroundColor:'white',
        borderRadius:25,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    DayText:{
        fontSize:12,
        fontFamily:'IndieFlower',
    }

})

export default styles