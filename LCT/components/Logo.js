import React from 'react';
import { Image, StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

function Logo({cheight='25', cwidth='70'}) {
//function Logo() {
    return (
        <Image
        style={styles.logo}
        style={[styles.logo, {height: hp(cheight+'%')}, {width: wp(cwidth+'%')} ]}
        source={require("../assets/LogoLTG.png")}></Image>
        
        );
}

const styles = StyleSheet.create({
    logo:{
        position: "absolute",
        resizeMode: "contain" ,
    }
})
export default Logo;