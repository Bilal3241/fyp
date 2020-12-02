import React,{useState} from 'react';
import{Button, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Input_field from '../components/Input_field'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const Post_add=()=>{
    const [accountNum,setAccountNum]=useState('');
    const [location,setLocation]=useState('');
    const [description,setDescription]=useState('');
    const [images,setImages]=useState('');
    const [rent,setRent]=useState('');
    return(
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.image}> 
            <View style={styles.bg}>
                <Text style={styles.heading}>Post Your Add</Text>
                <Input_field height='7'  st={accountNum} setSt={setAccountNum} pholder='Account Number'></Input_field>
                <Input_field height='7'  st={location} setSt={setLocation} pholder='Location'></Input_field>
                <Input_field height='7'  st={images} setSt={setImages} pholder='Upload Images'></Input_field>
                <Input_field height='30' st={description} setSt={setDescription} pholder='Description'></Input_field>
                <Input_field height='7'  st={rent} setSt={setRent} pholder='Rent'></Input_field>
                <TouchableNativeFeedback >
                    <View style={styles.btn}>
                        <Text style={{textAlign:'center', justifyContent: 'center'}}>Post Add</Text>
                    
                    </View>
                </TouchableNativeFeedback>
                {/* <Text style={styles.heading}>{accountNum}</Text>
                <Text style={styles.heading}>{location}</Text>
                <Text style={styles.heading}>{description}</Text>
                <Text style={styles.heading}>{images}</Text>
                <Text style={styles.heading}>{rent}</Text> */}
            </View>
        </ImageBackground>
    )
}
const styles=StyleSheet.create({
    image:{
        flex:1,
        resizeMode: "cover",
    },
    heading:{
        fontSize:hp('6%'),
        color:'white',
        textAlign:'center'
    },
    bg:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:'rgba(10, 10, 10, 0.6)',
        width:'100%',
        height:'100%',
    },
    btn:{
        
        width:wp('80%'),
        borderRadius:20,
        backgroundColor:'#0099fa',
        height:hp('7%'),
        justifyContent: "center"
        // paddingHorizontal:'50%'
    }
})
export default Post_add;