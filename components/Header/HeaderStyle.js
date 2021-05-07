import {
    StyleSheet,
    Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    HeaderBar:{
        
        width:windowWidth,
        height:50,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        flexDirection:'row',
        paddingHorizontal:10,
        
       
    },
    HeaderItem:{
        height:'100%',
        display:'flex',
        alignItems:'center',
        fontFamily:'IndieFlower',
        fontSize:24,
    },
    HeaderIcon:{
        height:24,
        width:24
    },
    HeaderPhoto:{
        height:36,
        width:36,
        borderColor:'grey',
        borderWidth:2,
        borderRadius:48,
        
    }

})


export default styles