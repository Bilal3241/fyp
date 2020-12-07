import React from 'react';
import {ImageBackground,StyleSheet, View,Image} from 'react-native';
import Circle from '../components/Circle';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
import colors from '../config/colors';

function Splash(props) {
    return (
        <ImageBackground style={styles.container} source={require("../assets/bg.jpg")}>
            <View style={styles.back}>
                <Logo />
           </View>
        </ImageBackground>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        color: colors.white,
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },
    back:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:colors.bgcolor,
    }
})

export default Splash;