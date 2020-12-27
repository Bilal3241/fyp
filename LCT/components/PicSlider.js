import React from 'react';
import {View,StyleSheet,Text,Image,ScrollView,Dimensions} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
const images=[
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]
const width=wp('90%');
const height= width * 0.6; //60%
const state={
    active:0
};

function PicSlider(props) {
    change=({nativeEvent})=>{
        const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active:slide});
        }
    }   
    return (
       
        <View style={styles.container}>
         
            <ScrollView 
             style={styles.slider}
             pagingEnabled
             horizontal
             //onScroll={this.change}
             showsHorizontalScrollIndicator={false}
              >
            {
                images.map((image,index) =>(
                    <Image 
                    key={index}
                    source={{uri:image}}
                    style={styles.image}
                    ></Image> 
                 
                ))
            }
           </ScrollView>
           <View style={styles.pagination}>
               {
               images.map((i,k)=>(
               <Text 
               key={k}
               style={k == state.active ? styles.paginationActiveText : styles.paginationText} > 
               ⬤
               </Text>
               ))
                }
           </View>
        </View>
        
    
    );
}
const styles = StyleSheet.create({
    
    container:{
        width,
        height,
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
        
    },
    image:{
        width,
        height,
        borderRadius:hp('5%')
    },
    slider:{
        left:wp("6%"),
    },
    pagination:{
        flexDirection:"row", 
        position:'absolute',
        bottom:0,
        left:wp("45%"),
    },
    paginationText:{
        color:'#fff',
        margin:3
    },
    paginationActiveText:{
        color:'#888',
        margin:3
    }


})

export default PicSlider;