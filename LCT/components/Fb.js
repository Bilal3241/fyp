import React from 'react';
import { TouchableOpacity,View ,Image,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Fb(props) {
    return (
        
    <TouchableOpacity  onPress={()=>{alert("you clicked facebook")}}>
       <Image style={styles.button} 
       source={require("../assets/fb1.png")}/>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        height:hp('15%'),
        width:wp('30%'),
        borderRadius:hp('20%'),
        marginTop:hp('63%'),
        margin:hp('5%'),
    },
})
export default Fb;