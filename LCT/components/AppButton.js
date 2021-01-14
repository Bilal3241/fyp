import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import {
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';

function AppButton({title, onPress, width="85" }) {
    return (
        <View style={styles.btnContainer}><TouchableOpacity style={[styles.button, {width: wp(width+'%')} ]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity></View>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        alignItems:'center',
    },
    button:{
        backgroundColor: colors.btnBlue,
        borderRadius: 30,
        justifyContent:"center",
        alignItems:"center",
        margin: '3%',
        padding:'3%',
    },
    text:{
        color: colors.white,
        fontSize: 20,
        textTransform: "capitalize",
        fontWeight:'bold',
    }
    
})
export default AppButton;