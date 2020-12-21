import React from 'react';
import { View ,StyleSheet,Image} from 'react-native';
import {
    DrawerItem,DrawerContentScrollView
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';  
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../config/colors';
import Logo from '../components/Logo';


function DrawerScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topBorder}>
                <Logo cheight='9' cwidth='45' ctop='10'/>
           </View>
            <DrawerItem
                icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size}/>
                )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}/>
            <DrawerItem
                icon={({color, size}) => (
                <Icon name="person-outline" color={color} size={size}/>
                )}
                label="Profile"
                onPress={() => {props.navigation.navigate('EditProfile')}}/>
            <DrawerItem
                icon={({color, size}) => (
                <Icon name="call-outline" color={color} size={size}/>
                )}
                label="Contact Us"
                onPress={() => {props.navigation.navigate('SignupScreen')}}
               />
            <DrawerItem
                icon={({color, size}) => (
                <Icon name="log-out-outline" color={color} size={size}/>
                )}
                label="Log Out"/>
        </View>
    );
}
const styles = StyleSheet.create({
    topBorder:{
        backgroundColor:colors.btnBlue,
        height:hp('30%'),
        alignItems:"center",
        justifyContent:"center",
    },
    container:{
        flex:1,
    }
    
})
export default DrawerScreen;