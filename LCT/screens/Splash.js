import React from 'react';
import {ImageBackground,StyleSheet, View,Image} from 'react-native';
import Circle from '../components/Circle';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Splash(props) {
    return (
        <ImageBackground style={styles.container} source={require("../assets/bg.jpg")}>
            <View style={styles.back}>
                <Image style={styles.logo} source={require("../assets/LogoLTG.png")}></Image>
           </View>
        </ImageBackground>
        );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },
    logo:{
        position: "absolute",
        width: wp('85%'),
        height: hp('17%'),
     },
    circle:{
        backgroundColor:"yellow",
        color:"red",
    },
    back:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:'rgba(10,10,10,0.6)',
    }
})

export default Splash;