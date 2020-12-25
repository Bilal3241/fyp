import { Item, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AdsCard from '../components/AdsCard';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';
import {getAllAds} from '../controller/AdsController/GetAllAds';
import {MyRooms} from '../controller/AdsController/MyRooms';

function AdsList({navigation,route}) {
    const [search,setSeacrh]=useState('');
    const [roomsList,setRoomsList]=useState([]);
    const onRoomsRecieved=(roomsList)=>{
     
     setRoomsList(roomsList)
  }
  useEffect(() => {
    if(route.params.page=="allRooms"){
      getAllAds(onRoomsRecieved)
    }
    else{
      MyRooms(onRoomsRecieved)
    }
    }, []);

      const list = () => {
        return roomsList.map((element) => {
          return (
            <AdsCard apartment={element} nav={navigation} path={route.params.page}></AdsCard>
          );
        });
      };
    
    return (
       
        <ImageBackground 
        source={IMAGEASSETS.museumBg}
        style={styles.background}>
            <View style={styles.bg}>
                <AppButton title='Post your Ad' onPress={()=>navigation.navigate('PostAd',{apartment:""})}></AppButton>
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
