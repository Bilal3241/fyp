import React from 'react';
import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/Colors';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

function Circle({title,color,size}) {
    return (
      <TouchableOpacity style={[styles.circle,{backgroundColor:color,borderRadius:(hp(size)/2),width:hp(size),height:hp(size)}]}  >
            <Text style={styles.text}>
                 {title}
            </Text>
           </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    circle:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color: colors.white,
        fontSize: hp('3%'),
        fontWeight: "bold",
        textAlign: "center",
    }
})
export default Circle;