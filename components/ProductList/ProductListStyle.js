import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Icon:{
        width: 11,
        height: 11,
        marginRight:-15,
        marginTop:'50%'
        
        
    },
    StyledWrapper:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20
    },
    ProductName:{
        fontFamily:'IndieFlower',
        paddingLeft:20,
        fontSize:12
    },
    ProductValue:{
        fontFamily:'IndieFlower',
        color: '#a6a5a2',
        fontSize:11

    }

})

export default styles