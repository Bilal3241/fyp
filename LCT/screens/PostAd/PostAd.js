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
import { firebase } from '@react-native-firebase/firestore';


function PostAd({route}){
    const LocRead=() =>{
        if (route.params.path=="myrooms") {
            return(<InputField st={location} setSt={setLocation} pholder='Location' keyboardType="numeric" editable={false}></InputField>)
        }else{
            return (<InputField st={location} setSt={setLocation} pholder='Location'keyboardType="numeric" ></InputField>)
        }
    }
    var user=firebase.auth().currentUser;
    const [owner,setOwner]=useState(user.email);
   // const [long,setLong]=useState('');
  //  const [lat,setLat]=useState('');
    const [location,setLocation]=useState(route.params.apartment.Location)
    const [desc,setDesc]=useState(route.params.apartment.Description);
    const [images,setImages]=useState('');
    const [rent,setRent]=useState(route.params.apartment.Charges);
    const [title,setTitle]=useState(route.params.apartment.Title);
    const [availability,setAvailability]=useState(route.params.apartment.IsAvailable);
    const [rooms, setRooms]=useState(route.params.apartment.NoOfRooms);
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
        var edit=route.params.path
        var data={
            Charges: rent, Description: desc, Images: images,  IsAvailable: availability, Location:location, NoOfRooms: rooms, Title: title, //account: accountNum, //owner: current User
        }
        PostAds(data,edit, adPosted);
    }
    return(
        <ImageBackground source={IMAGEASSETS.backgroundImage} style={stylesheet.backgroundImage}> 
            <ScrollView>
                <View style={stylesheet.bgView}>
                <Text style={styles.heading}>Post Your Add</Text>
                <InputField st={title} setSt={setTitle} pholder='Title'></InputField>
                {/* <InputField st={accountNum} setSt={setAccountNum} pholder='Account Number' keyboardType="numeric"></InputField> */}
                <InputField st={rooms} setSt={setRooms} pholder='No. of Rooms' keyboardType="numeric"></InputField>
                {/* <InputField st={lat} setSt={setLat} pholder='Latitude' keyboardType="numeric"></InputField>
                <InputField st={long} setSt={setLong} pholder='Longitude' keyboardType="numeric"></InputField> */}
                <LocRead></LocRead>
                <InputField cheight='20' st={desc} setSt={setDesc} pholder='Description'></InputField>
                <InputField st={rent} setSt={setRent} pholder='Rent' keyboardType="numeric"></InputField>
                <InputField st={owner} setSt={setOwner} pholder='Owner' editable={false}></InputField>
                <InputField st={availability} setSt={setAvailability} pholder='Is the apartment available(Y/N)?' ></InputField>
                <TouchableOpacity onPress={selectFromGallery}>
                <View style={styles.imgbg}> 
                <ImageBackground
                    source={images}
                    style={styles.img}/>
                </View>
                </TouchableOpacity>
                <AppButton title="Submit Ad" onPress={postMyAd}></AppButton>
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