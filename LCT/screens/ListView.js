import { Item, View ,Input} from 'native-base';
import React, { useEffect, useState } from 'react';
import {Text,ImageBackground, StyleSheet,FlatList} from 'react-native';
import colors from '../config/colors';
import { IMAGEASSETS } from '../assets/images';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {getPlaces} from '../controller/AdsController/GetPlaces';

function ListView({navigation,route}) {
  

  const [activeSections,setActiveSections]=useState([]);
  const onPlaceRecieved=(placeList)=>{
    setActiveSections(placeList)
}

useEffect(() => {
     getPlaces(onPlaceRecieved);
  }, []);


  console.log(activeSections);


    const _renderHeader =(section, index, isActive, sections) => {
        return (
            <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
        <Text style={styles.headerText}>DHA</Text>
      </Animatable.View>
          );
      };
      const _renderContent =(section, i, isActive, sections) => {
        return (
          <Animatable.View
          duration={300}
          transition="backgroundColor"
          style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
          <Animatable.Text
            duration={300}
            easing="ease-out"
            animation={isActive ? 'zoomIn' : false}>
            {section.Title}
          </Animatable.Text>
        </Animatable.View>
          );
      };
      const _updateSections =(activeSections) => {
        setActiveSections(activeSections);
      };
    
      
      return (
       
        <Accordion
        sections={activeSections}
        activeSections={activeSections}
       
       
       renderHeader={_renderHeader}
       renderContent={_renderContent}
        onChange={_updateSections}
      />
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
      marginBottom:"2%",
    }
})
export default ListView;
