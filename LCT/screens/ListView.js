
import React, { useEffect, useState } from 'react';
import {Text,SafeAreaView, StyleSheet,View,UIManager,Platform ,ScrollView, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import { IMAGEASSETS } from '../assets/images';
import { isTypeNode } from 'typescript';
import { LayoutAnimation } from 'react-native';
import {performance} from 'perf_hooks';
const CONTENT =[
  {
    isExpanded:false,
    category_name:'Item1',
    subCategory:[
      {id:1,val:'Sub1'},
      {id:2,val:'Sub2'},
    ]
  },
  {
    isExpanded:false,
    category_name:'Item2',
    subCategory:[
      {id:3,val:'Sub3'},
      {id:4,val:'Sub4'},
    ]
  },
  {
    isExpanded:false,
    category_name:'Item3',
    subCategory:[
      {id:5,val:'Sub5'},
      {id:6,val:'Sub6'},
    ]
  },
];
function ListView({navigation,route}) {
 
  const [activeSections,setActiveSections]=useState([]);
  const onPlaceRecieved=(placeList)=>{
    setActiveSections(placeList)
}

useEffect(() => {
     getPlaces(onPlaceRecieved);
  }, []);


  console.log(activeSections);

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
    bg:{
        flex:1,
        backgroundColor: colors.bgcolor,
        width:'100%',
        height:'100%',
        paddingHorizontal:'5%',
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
