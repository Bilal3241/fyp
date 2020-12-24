import React from 'react';
import CircleImage from '../components/CircleImage';
import {ImageBackground,StyleSheet, View} from 'react-native';
import Circle from '../components/Circle';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';  
import {IMAGEASSETS} from "../assets/images";
import stylesheet from '../assets/stylesheet/stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home({route, navigation}) {
    var show = () => {
        console.warn(route);
    };

    return (
        <ImageBackground style={stylesheet.backgroundImage}  source={IMAGEASSETS.backgroundImage} resizeMode="stretch">
            <View style={stylesheet.bgView}>
                <View style={styles.icon}>
                    <Icon name="menu-outline" size={50} color="white"></Icon> 
                </View>
                <View style={styles.hotelnRes}>
                    <Circle fn={show} title="Hotels & Restaurants" color="rgba(103,185,232,0.7)" size="20%" ></Circle>
                </View> 
                <View style={styles.logo}>
                    <CircleImage color="rgba(21,66,107,0.7)" size="40%" image={IMAGEASSETS.logo}/>
                </View>
                <View style={styles.destinations}>
                    <Circle fn={show} title="Destinations" color="rgba(33,127,214,0.7)" size="20%" />
                </View> 
                <View style={styles.nearby}>
                    <Circle fn={show} title="Nearby Attractions" color="rgba(56,162,222,0.7)" size="25%"></Circle>
                </View>
                <View style={styles.reservations}>
                    <Circle fn={show} title="Reservations" color="rgba(29,208,248,0.7)" size="20%"></Circle>
                </View> 
            </View>
        </ImageBackground>
        );
}
const styles = StyleSheet.create({
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
    icon:{
        position:"absolute",
        top:hp('1%'),
        left:wp('2%')
    }
})
export default Home;