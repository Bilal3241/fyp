
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
    const ExpandableComponent = ({item,onClickFunction}) =>  {
      const [layoutHeight,setLayoutHeight]=useState(0);
      useEffect(()=>{
        if(item.isExpanded){
          setLayoutHeight(null);
        }else{
          setLayoutHeight(0);
        }
      
      },[item.isExpanded])
      return(

        <View>
          <TouchableOpacity styles={style.item} onPress={onClickFunction}>
            <Text styles={style.itemText}>
                {item.category_name}
            </Text >
          </TouchableOpacity>
          <View  style={{height:layoutHeight, overflow:'hidden'}}>
           {
             item.subCategory.map((item,key)=>{
               <TouchableOpacity 
               key={key}
               style={styles.content}>
                  <Text style={styles.text}>
                     {key}.{item.val}
                  </Text>
                  <View style={styles.seperator}></View>
               </TouchableOpacity>

             })
           }
          </View>
        </View>
        
      )
      
    }
    const [listDataSource,setListDataSource]=useState(CONTENT);
    const [multiSelect,setMultiSelect]=useState(false);
    
    if(Platform.OS === 'android'){
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout=(index)=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array=[...listDataSource];
        if(multiSelect){
          array[index]['isExpanded']=!array[index]['isExpanded']
        }
        else{
          array.map((value,placeindex)=>
          placeindex === index
          ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
          : (array[placeindex]['isExpanded'])= false
        
        );
    }
     setListDataSource(array);
  }
      return ( 
       
      <SafeAreaView style={{flex:1}}>
         <View style={styles.Container}>
           <View style={styles.header}>
              <Text style={styles.titleText}>
                Expandable
              </Text>
              <TouchableOpacity onPress={()=> setMultiSelect(!multiSelect)}>
              <Text style={styles.headerButton}>
                {
                  multiSelect
                  ?'Enable Single \n Expand'
                  : 'Enable Multiple \n Expand'
                }
              </Text>
              </TouchableOpacity>
           </View>
            <ScrollView>
              {
                listDataSource.map((item,key)=>(<ExpandableComponent
                key={item.category_name}
                  item={item}
                  onClickFunction={()=>
                  {
                    updateLayout(key)
                  }}
                  />))
               }  
            </ScrollView>
         </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container:{
      flex:1,
    },
    titleText:{
      flex:1,
      fontSize:22,
      fontWeight:'bold'
    },
    headerButton:{
      textAlign:'center',
      justifyContent:'center',
      fontSize:10
    },
    header:{
      flexDirection:'row', 
      padding:10,
    },
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",

    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    margin:{
      marginBottom:"2%",
    },
    item:{
      backgroundColor:'blue',
    },
    itemText:{
      fontSize:16,
      fontWeight:'500',
    },
    content:{
      paddingLeft:10,
      paddingRight:10,
      backgroundColor:'#fff'
    },
    text:{
      fontSize:16,
      padding:10
    },
    seperator:{
      height:0.5,
      backgroundColor:'#c8c8c8',
      width:'100%'
    }

})
export default ListView;

