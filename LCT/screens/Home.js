import React from 'react';
import CircleImage from '../components/CircleImage';
import {ImageBackground,StyleSheet, View} from 'react-native';
import Circle from '../components/Circle';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/Colors';

function Home(props) {
    return (
        <ImageBackground style={styles.container}  source={require("../assets/bg.jpg")}>
            <View style={styles.back}>
                <View style={styles.hotelnRes}>
                    <Circle  title="Hotels & Restaurants" color="rgba(103,185,232,0.7)" size="20%" ></Circle>
                </View> 
                <View style={styles.logo}>
                    <CircleImage color="rgba(21,66,107,0.7)" size="40%" image={require("../assets/LogoLTG.png")}/>
                </View>
                <View style={styles.destinations}>
                    <Circle title="Destinations" color="rgba(33,127,214,0.7)" size="20%" />
                </View> 
                <View style={styles.nearby}>
                    <Circle  title="Nearby Attractions" color="rgba(56,162,222,0.7)" size="25%"></Circle>
                </View>
                <View style={styles.reservations}>
                    <Circle  title="Reservations" color="rgba(29,208,248,0.7)" size="20%"></Circle>
                </View> 
            </View>
        </ImageBackground>
        );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    hotelnRes:{
        position:"absolute",
        top:hp('5%'),
        right:wp('16%'),
    },
    destinations:{
        position:"absolute",
        top:hp('18%'),
        left:wp('5%'),
    },
    nearby:{
        position:"absolute",
        bottom:hp('15%'),
        left:wp("5%"),
    },
    reservations:{
        position:"absolute",
        bottom:hp('5%'),
        right:wp('6%'),
    },
    logo:{
        justifyContent: "center",
        alignItems:"center",
    },
    back:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:colors.bgcolor,
    }
})
export default Home;