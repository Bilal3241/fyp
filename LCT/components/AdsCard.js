import { Card, CardItem, Left, Right, Subtitle, Thumbnail, Title } from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

function AdsCard( {apartment,nav}){
    return (
        <Card style={{ backgroundColor: "transparent" }}>
            <CardItem style={styles.card} button onPress={() => nav.push('PostAd',{apartment})}>
                <Left>
                <Thumbnail
               // source={apartment.Image}
                style={styles.pic}/>
                <View style={styles.details}>
                    <Title style={styles.heading}>{apartment.Title}</Title>
                    <Subtitle><IonIcons size={15} name="bed-sharp"></IonIcons> {apartment.NoOfRooms}</Subtitle>
                    <Subtitle><IonIcons size={15} name="location"></IonIcons> {apartment.Location}</Subtitle>
                </View>
                </Left>
                <Right>
                    <Subtitle style={styles.fare}> ${apartment.Charges}</Subtitle>
                </Right>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    card:{
        height:heightPercentageToDP('15%'),
        width: '100%',
        backgroundColor:colors.cardBg,
    },
    pic:{
        width:widthPercentageToDP('18%'),
        height: heightPercentageToDP('10%'),
        marginRight: '5%',
        borderRadius:0,
    },
    details:{
        alignItems: "flex-start",
        top: '-3%',
    },
    heading:{
        fontWeight: 'bold',
        textTransform:'capitalize',
    },
    fare:{
        alignItems:'flex-end',
        fontWeight: 'bold',
        fontSize: heightPercentageToDP('5%'),
    }
})
export default AdsCard;