import { Item, View } from 'native-base';
import React, { useState } from 'react';
import {FlatList, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AdsCard from '../components/AdsCard';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';
function AdsList(props) {
    const [search,setSeacrh]=useState('');
    let obj={};
    var objLoop=[];
    for(let i=0;i<10;i++){
        obj={img:IMAGEASSETS.listImg, title:('Room '+i), noOfRooms:(i), location:('location '+i), price:('3'+i)}
        objLoop.push(<AdsCard apartment={obj}></AdsCard>)
    }
    return (
        <ImageBackground 
        source={IMAGEASSETS.museumBg}
        style={styles.background}>
            <View style={styles.bg}>
                <AppButton title='Post your Ad' press={()=>alert("pressed")}></AppButton>
                <SearchBox st={search} setSt={setSeacrh}/>
                <ScrollView> 
                    {objLoop}
                </ScrollView>
               </View>
        </ImageBackground>
    );
}
export default AdsList;
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