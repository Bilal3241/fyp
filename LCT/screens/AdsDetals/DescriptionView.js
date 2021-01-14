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
            <View style={styles.btn}>
            <AppButton title="Start Chat" width='40' onPress={()=>alert("Start Chat")}></AppButton>
            <AppButton  title="Get Direction" width='40' onPress={() => Linking.openURL('google.navigation:q=100+101')}></AppButton>
            </View>
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
    btn:{
        flex:1,
        flexDirection:'row',
        justifyContent:"center",
        marginTop:'3%',
    },
})
export default DescriptionView;