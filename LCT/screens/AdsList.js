import { Item, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {FlatList, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AdsCard from '../components/AdsCard';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';
import Firestore from '@react-native-firebase/firestore';
import GetAllAds from '../controller/AdsController/GetAllAds';

function AdsList(props) {
    const [search,setSeacrh]=useState('');
   const a=[{"Charges": "123659", "Description": "Cgghj", "Images": {"uri": "file:///data/user/0/com.lct/cache/react-native-image-crop-picker/e7a0d175-254b-4b2c-b1a2-868c0887e7ce.jpg"}, "IsAvailable": "Y", "Location": "236,123", "NoOfRooms": "1", "Owner": "Bilal", "Title": "Abcd", "key": "1"},
             {"Charges": "50", "Description": "dfghjk hjk", "Images": {"uri": "file:///data/user/0/com.lct/cache/react-native-image-crop-picker/05cecbca-5662-44e6-ad6c-f89dc96c285a.jpg"}, "IsAvailable": "true", "Location": "238,7985", "NoOfRooms": "2", "Owner": "Bilal", "Title": "X Apartment", "key": "2"},
            {"Charges": "56", "Description": "Sthjbcdthhh", "Images": {"uri": "file:///data/user/0/com.lct/cache/react-native-image-crop-picker/82eedc7d-5867-4565-823e-c0f3cf8141b1.jpg"}, "IsAvailable": "True", "Location": "99999,88888", "NoOfRooms": "2", "Owner": "Bilal", "Title": "Gggg", "key": "3"}, 
            {"Charges": 1500, "Description": "Comfortable and liveable environment", "Images": {"img1": "img1", "img2": "img2", "img3": "img3"}, "IsAvailable": true, "Location": "78346758,3828", "NoOfRooms": 1, "Owner": "Bilal", "Title": "Luxury Room", "key": "4"}]
   
      const [objLoop,seObjLoop]=useState([]);
      Firestore().collection("Rooms").get().then((snapshot)=> {
        snapshot.docs.forEach(doc=> {
        objLoop.push(doc.data())
        });
        seObjLoop(objLoop)
    })


   
    // useEffect(
    //     () => {
    //         (async () => {
    //             Firestore().collection("Rooms").get().then((snapshot)=> {
    //                 snapshot.docs.forEach(doc=> {
    //                 objLoop.push(doc.data())
    //                 });
    //                seObjLoop(objLoop)
                  
                 
                 
               
    //         })()
    //     }, [])
    //     })
    console.warn(objLoop)
   
      const list = () => {
        return objLoop.map((element) => {
          return (
            <AdsCard apartment={element}></AdsCard>
          );
        });
      };
    
    return (
       
        <ImageBackground 
        source={IMAGEASSETS.museumBg}
        style={styles.background}>
            <View style={styles.bg}>
                <AppButton title='Post your Ad' press={()=>alert("pressed")}></AppButton>
                <SearchBox st={search} setSt={setSeacrh}/>
                <ScrollView> 
                   {list()}
                </ScrollView>
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
})
export default AdsList;
