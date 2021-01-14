import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';

function DescriptionView({apartment}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {apartment.Title}
            </Text>

            <Text style={styles.location}>
                 {apartment.Location}
            </Text>
            <Text style={styles.description}>
                 {apartment.Description} 
              
            </Text>
            <Text style={styles.description}>
                 Charges: {apartment.Charges}  No of Rooms: {apartment.NoOfRooms}
            </Text>
            <AppButton  title="Get Direction" onPress={() => Linking.openURL('google.navigation:q=100+101')}></AppButton>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        margin:'2%',
    },
    text:{
        color:colors.white,
        fontSize: hp('5%'),
        fontWeight:'bold'

    },
    location:{
        color:colors.white,
        fontSize: hp('3%'),
    },
    description:{
        color:colors.white,
        fontSize: hp('2%'),
       
    },
    
})
export default DescriptionView;