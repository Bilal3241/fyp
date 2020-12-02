import React from 'react';
import { Image, StyleSheet,View} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

function CircleImage(props) {
    return (
        <View style={styles.circle}>
           <Image style={styles.logo} source={require("../assets/LogoLTG.png")}></Image>
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
    logo:{
        position: "absolute",
        width: wp('68%'),
        height: hp('14%'),
    },
})
export default CircleImage;