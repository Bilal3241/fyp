import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { useEffect, useState } from 'react';
import {getPlaces} from '../controller/AdsController/GetPlaces';
const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
    content: BACON_IPSUM,
  },
];

function ListView({navigation,route}) {
  // state = {
  //   activeSections: [],
  //   collapsed: true,
  //   multipleSelect: false,
  // };
  const [activeSections,setActiveSections]=useState([]);
  const [collapsed,setCollapsed]=useState(true);
  const [multipleSelect,setMultipleSelect]=useState(false);
  const [placeList1,setPlaceList1]=useState([]);
  const onPlaceRecieved=(placeList)=>{
    setPlaceList1(placeList)
    }
    
    useEffect(() => {
         getPlaces(onPlaceRecieved);
      }, []);
    
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

 
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections,);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.Area}</Text>
      </Animatable.View>
    );
  };
  
  const renderContent= (section, _, isActive)  => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.Title}
        </Animatable.Text>
      </Animatable.View>
    );
  };
        
        return (
         
  
          <View>
            
        <ScrollView>
            <Accordion
              activeSections={activeSections}
              sections={placeList1}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={400}
              onChange={setSections}
            />
          </ScrollView>
        </View>
      );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
     //paddingTop: Constants.statusBarHeight,
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    active: {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
      backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },
  })
  export default ListView;
  