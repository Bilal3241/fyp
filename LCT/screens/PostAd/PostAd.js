import React,{useState} from 'react';
import{Button, ImageBackground, SafeAreaView, TouchableOpacity, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import InputField from '../../components/InputField';
import ImagePicker from 'react-native-image-crop-picker';
import AppButton from '../../components/AppButton';
//import styles from './style';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGEASSETS } from '../../assets/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../../config/colors';
import stylesheet from '../../assets/stylesheet/stylesheet';
import PostAds from '../../controller/AdsController/PostAds';


function PostAd(){
    const [accountNum,setAccountNum]=useState('');
    const [long,setLong]=useState('');
    const [lat,setLat]=useState('');
    const [desc,setDesc]=useState('');
    const [images,setImages]=useState('');
    const [rent,setRent]=useState('');
    const [title,setTitle]=useState('');
    const [availability,setAvailability]=useState('');
    const [rooms, setRooms]=useState('');
    const selectFromGallery=()=>{
        ImagePicker.openPicker({
            cropping: true
          }).then(image => {
            setImages({uri: image.path});
            console.log(images);
          });
    }
    const adPosted=()=>{
    }
    const postMyAd=()=>{
        var data={
            Charges: rent, Description: desc, Images: images,  IsAvailable: availability,longitude: long, latitude: lat, NoOfRooms: rooms, Title: title, //account: accountNum, //owner: current User
        }
        PostAds(data, adPosted);
    }
    return(
        <ImageBackground source={IMAGEASSETS.backgroundImage} style={stylesheet.backgroundImage}> 
            <ScrollView>
                <View style={stylesheet.bgView}>
                <Text style={styles.heading}>Post Your Add</Text>
                <InputField st={title} setSt={setTitle} pholder='Title'></InputField>
                <InputField st={accountNum} setSt={setAccountNum} pholder='Account Number' keyboardType="numeric"></InputField>
                <InputField st={rooms} setSt={setRooms} pholder='No. of Rooms' keyboardType="numeric"></InputField>
                <InputField st={lat} setSt={setLat} pholder='Latitude' keyboardType="numeric"></InputField>
                <InputField st={long} setSt={setLong} pholder='Longitude' keyboardType="numeric"></InputField>
                <InputField cheight='20' st={desc} setSt={setDesc} pholder='Description'></InputField>
                <InputField st={rent} setSt={setRent} pholder='Rent' keyboardType="numeric"></InputField>
                <InputField st={availability} setSt={setAvailability} pholder='Is the apartment available(Y/N)?' ></InputField>
                <TouchableOpacity onPress={selectFromGallery}>
                <View style={styles.imgbg}> 
                <ImageBackground
                    source={images}
                    style={styles.img}/>
                </View>
                </TouchableOpacity>
                <AppButton title="Post Ad" onPress={postMyAd}></AppButton>
            </View>
            </ScrollView>
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
    imgbg:{
        height:hp('15%'),
        width: wp('22%'),
        resizeMode: "contain",
        borderColor: colors.white,
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: '3%'
    },
    img:{
        height:'100%',
        width: '100%',
        resizeMode:'contain',
    },
})
export default PostAd;