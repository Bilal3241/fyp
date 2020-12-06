import React from 'react';
import { Image, StyleSheet,View} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
function CircleImage(props) {
    return (
        <View style={styles.circle}>
          <Logo cheight='14' cwidth='65'/>
          </View>
    );
}
const styles = StyleSheet.create({

    circle:{
        backgroundColor:"#607591",
        height:hp('40%'),
        width:hp('40%'),
        borderRadius:hp('20%'),
        justifyContent:"center",
        alignItems:"center",
    },
})
export default CircleImage;