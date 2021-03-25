import { Item, View ,Input} from 'native-base';
import React, { useEffect, useState } from 'react';
import {ImageBackground, Text,StyleSheet,FlatList,TouchableOpacity,Alert} from 'react-native';
import colors from '../config/colors';
import SearchBox from '../components/SearchBox';
import { IMAGEASSETS } from '../assets/images';

function AdsList({navigation}) {
  
  const data = [
    { Title: 'Iqbal Town' },
    { Title: 'Johar Town' },
    { Title: 'Muslim Town' },
    { Title: 'Township' },
    { Title: 'Model Town' },
    { Title: 'Gulberg' },
    { Title: 'Ichra' },
    { Title: 'Cantt' },
    { Title: 'Mall Road' },
    { Title: 'Defence' },
    { Title: 'Bhatti Gate' },
    { Title: 'Shadman' },
  ];
  
  const [search,setSearch]=useState(data);
  const [destList,setDestList]=useState(data);

      return (
       
        <ImageBackground 
        source={IMAGEASSETS.museumBg}
        style={styles.background}>
            <View style={styles.bg}>
            <View style={styles.margin}>
            <SearchBox  list={data} searchStatefn={setSearch}/>
                </View>
                <FlatList
            data={ search }
            renderItem={ ({item}) =>
            <TouchableOpacity style={styles.GridViewContainer} onPress={()=>navigation.navigate('ListView')}>
              <View >
               <Text style={styles.GridViewTextLayout}  > {item.Title} </Text>
              </View>
              </TouchableOpacity>}
            numColumns={3}
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
