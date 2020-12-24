import { Card, CardItem, Left, Right, Subtitle, Thumbnail, Title ,Text,Alert} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

function AdsCard( {apartment,nav,path}){
    const EditIcon=() =>{
        if (path=="myrooms") {
            return( <IonIcons size={25} name="create-sharp" onPress={() => nav.push('PostAd',{apartment,path})} ></IonIcons>);
        } else {
            return null;
        }
    }
    const DeleteIcon=() =>{
        if (path=="myrooms") {
            return(<IonIcons size={25} name="trash-sharp"onPress={()=>alert("are you sure you want to delete")}></IonIcons>);
        } else {
            return null;
        }
    }
  
    return (
        <Card style={{ backgroundColor: "transparent" }}>
            <CardItem style={styles.card} button onPress={() => alert("pressed")}>
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
                    <View>
                    <EditIcon></EditIcon><DeleteIcon></DeleteIcon>
                    </View>
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