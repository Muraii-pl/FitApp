import {
    StyleSheet,
} from 'react-native'



const styles = StyleSheet.create({
    HeaderWrapper:{
        height:30,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15

    },
    Icon:{
        width: 15,
        height: 15,
        display: 'flex',
        
    },
    NameMeal:{
        fontSize:16,
        fontFamily:'IndieFlower',
    },
    ValuesWrapper:{
        height:20,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30
    },
    ValuesNames:{
        fontSize:12,
        fontFamily:'IndieFlower',
    }
})


export default styles