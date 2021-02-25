import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import IonIcons from 'react-native-vector-icons/Ionicons';

function DescriptionView({apartment}) {
    return (
        <View style={styles.container}>
            <View style={styles.detailbox}>
                <Text style={styles.title}>
                    {apartment.Title}
                </Text>

                <Text style={styles.heading}>
                    Location: <Text style={styles.description}>{apartment.Location}</Text>
                </Text>
                
                <Text style={styles.heading}>
                    Charges: <Text style={styles.description}>{apartment.Charges} </Text>
                </Text>
                <Text style={styles.heading}>
                    No of Rooms: <Text style={styles.description}>{apartment.NoOfRooms}</Text>
                </Text>
                <Text style={styles.heading}>
                    Description: <Text style={styles.description}>{'\n'}{apartment.Description} </Text>
                </Text>
            </View>
            <View style={styles.buttons}> 
                {/* <AppButton  title="Get Direction" onPress={() => Linking.openURL('google.navigation:q=100+101')}></AppButton> */}
                <IonIcons size={50} name="compass" color={colors.btnBlue} onPress={() => Linking.openURL('google.navigation:q=100+101')} ></IonIcons>
                <Text>Direction</Text>
             </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding:'5%'
    },
    title:{
        color:colors.black,
        fontSize: hp('5%'),
        fontWeight:'bold',
        textAlign:'center'

    },
    heading:{
        color:colors.black,
        fontSize: hp('3%'),
        textAlign:'left',
        fontWeight:'bold',
        
    },
    detailbox:{
        padding:'6%',
        borderColor:colors.black,
        borderWidth:2,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor:colors.cardBg,
    },
    buttons:{

    },
    description:{
        fontWeight:'normal',
        color:'grey',
        fontStyle:'italic',
        textAlign:'right'

    }
    
})
export default DescriptionView;