import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/Colors';
import {
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';

function AppButton({title, press  }) {
    return (
        <TouchableOpacity style={styles.button} onPress={press}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.btnBlue,
        borderRadius: 30,
        justifyContent:"center",
        alignItems:"center",
        margin: '5%',
        padding:'3%',
        width: wp("80%"),
    },
    text:{
        color: colors.white,
        fontSize: 20,
        textTransform: "capitalize",
        fontWeight:'bold',
    }
    
})
export default AppButton;