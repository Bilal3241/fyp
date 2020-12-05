import React from 'react';
import { View ,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Gmail(props) {
    return (
        <TouchableOpacity onPress={()=>{alert("you clicked gamil")}}>
       <Image style={styles.button} 
       source={require("../assets/gmail3.jpg")}/>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
   
    button:{
        backgroundColor:'#ffffff',
        height:hp('15%'),
        width:wp('30%'),
        borderRadius:hp('20%'),
        marginTop:hp('64%'),
        margin:hp('5%'),
    }
})
export default Gmail;