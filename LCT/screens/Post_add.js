import React,{useState} from 'react';
import{Button, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import Input_field from '../components/Input_field';
import ImagePicker from 'react-native-image-crop-picker';
import AppButton from '../components/App_Button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../config/Colors';


const Post_add=()=>{
    const [accountNum,setAccountNum]=useState('');
    const [location,setLocation]=useState('');
    const [description,setDescription]=useState('');
    const [images,setImages]=useState('');
    const [rent,setRent]=useState('');
    selectFromGallery=()=>{
        ImagePicker.openPicker({
            cropping: true
          }).then(image => {
            console.log(image);
            setImages(image.path)
          });
    }
    return(
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.image}> 
            <View style={styles.bg}>
                <Text style={styles.heading}>Post Your Add</Text>
                <Input_field st={accountNum} setSt={setAccountNum} pholder='Account Number' keyboardType="numeric"></Input_field>
                <Input_field st={location} setSt={setLocation} pholder='Location'></Input_field>
                <Input_field cheight='20' st={description} setSt={setDescription} pholder='Description' ></Input_field>
                <Input_field st={rent} setSt={setRent} pholder='Rent'></Input_field>
                <AppButton title="Upload Images" press={selectFromGallery}></AppButton>
                <AppButton title="Post Ad" press={()=>alert("pressed")}></AppButton>
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
        color:colors.white,
        textAlign:'center'
    },
    bg:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:colors.bgcolor,
        width:'100%',
        height:'100%',
    },
})
export default Post_add;