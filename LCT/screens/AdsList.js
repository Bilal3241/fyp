import { Item, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import {FlatList, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AdsCard from '../components/AdsCard';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';
import Firestore from '@react-native-firebase/firestore';
import {getAllAds} from '../controller/AdsController/GetAllAds';

function AdsList(props) {
    const [search,setSeacrh]=useState('');
    //    const [objLoop,seObjLoop]=useState([]);
    // useEffect(() => {
    //   Firestore().collection("Rooms").get().then((snapshot)=> {
    //     snapshot.docs.forEach(doc=> {
    //     objLoop.push(doc.data())
    //     });
    //     seObjLoop(objLoop)
    // })
    // }, []);    
    // console.warn(objLoop)
    // const [groceryList, setGroceryList] = useState();
    // const [error, setError] = useState();

    const [roomsList,setRoomsList]=useState([]);
    const onRoomsRecieved=(roomsList)=>{
      console.log(roomsList);
      setRoomsList(roomsList)
      
  }
  useEffect(() => {
     getAllAds(onRoomsRecieved)
    }, []);










      const list = () => {
        return roomsList.map((element) => {
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
