import { Item, View ,Input} from 'native-base';
import React, { useEffect, useState } from 'react';
import {ImageBackground, Text,StyleSheet,FlatList,Alert} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AdsCard from '../components/AdsCard';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';
import {getAllAds} from '../controller/AdsController/GetAllAds';
import {MyRooms} from '../controller/AdsController/MyRooms';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';

function AdsList() {
  const data = [
    { key: 'Iqbal Town' },
    { key: 'Johar Town' },
    { key: 'Muslim Town' },
    { key: 'Township' },
    { key: 'Model Town' },
    { key: 'Gulberg' },
    { key: 'Ichra' },
    { key: 'Cantt' },
    { key: 'Mall Road' },
    { key: 'Defence' },
    { key: 'Bhatti Gate' },
    { key: 'Shadman' },
  ];
  
  

      return (
       
      <ImageBackground 
        source={IMAGEASSETS.museumBg}
        style={styles.background}>
            <View style={styles.bg}>
            <View style={styles.margin}>
                  <SearchBox />
                </View>
                <FlatList
            data={ data }
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Text style={styles.GridViewTextLayout}  > {item.key} </Text>
              </View> }
            numColumns={2}
         />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    bg:{
        flex:1,
        backgroundColor: colors.bgcolor,
        width:'100%',
        height:'100%',
        paddingHorizontal:'5%',
    },
    margin:{
      marginTop:"5%",
    },
    
    GridViewContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      margin: 8,
      marginTop:20,
      backgroundColor:colors.btnBlue,
      borderRadius:20,
     },
   GridViewTextLayout: {
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      color: '#fff',
      padding: 10,
    }
   
})
export default AdsList;
