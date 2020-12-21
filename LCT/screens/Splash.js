import React from 'react';
import {ImageBackground,StyleSheet, View,Image} from 'react-native';
import Circle from '../components/Circle';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
import colors from '../config/colors';
import { IMAGEASSETS } from '../assets/images';
import stylesheet from '../assets/stylesheet/stylesheet';

function Splash(props) {
    return (
        <ImageBackground style={stylesheet.backgroundImage} source={IMAGEASSETS.backgroundImage}>
            <View style={stylesheet.bgView}>
                <Logo />
           </View>
        </ImageBackground>
        );
}

const styles = StyleSheet.create({
    text:{
        color: colors.white,
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default Splash;