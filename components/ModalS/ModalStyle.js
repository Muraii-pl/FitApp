import {
    StyleSheet,
    Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    LightText:{
        color:'#a6a5a2',
        textAlign:'center',
        fontFamily:'IndieFlower',
        fontSize:12
    },
    BigText:{
        textAlign:'center',
        fontFamily:'IndieFlower',
        fontSize:20,
        color: "black"
    },
    SearchProduct: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        fontFamily:'IndieFlower',
        fontSize:10,
        borderRadius: 10
      },
      BackArrow: {
        fontSize:25
      },
})

export default styles