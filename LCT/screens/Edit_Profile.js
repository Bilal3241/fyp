import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/App_Button';
import InputField from '../components/Input_field';
import colors from '../config/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ImgPicker from '../components/Img_Picker';


function EditProfile(props) {

    const [usrImg, setImg]=useState('');
    const [userName, setUsr]=useState('');
    const [email, setMail]=useState('');
    const [accountNum, setAccontNum]=useState('');
    const [contact, setContact]=useState('');
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/bg.jpg")}>
            <View style={styles.bg}>
            <Text style={styles.heading}>Edit Profile</Text>
            <ImgPicker/>
            <InputField pholder='name' st={userName} setSt={setUsr} ></InputField>
            <InputField pholder='email' st={email} setSt={setMail} keyboardType="email-address" ></InputField>
            <InputField pholder='Contact number' st={accountNum} setSt={setAccontNum} keyboardType="numeric" ></InputField>
            <InputField pholder='Account number' st={contact} setSt={setContact} ></InputField>
            <AppButton title="Update" press={()=>alert("pressed")}></AppButton>
            </View>
         </ImageBackground>
    );
}

const styles=StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    bg:{
        flex:1,
        backgroundColor: colors.bgcolor,
        justifyContent: "center",
        alignItems:'center',
        width:'100%',
        height:'100%',
        paddingHorizontal:'10%',
    },
    heading:{
        fontSize:heightPercentageToDP('6%'),
        color:colors.white,
        textAlign:'center',
        marginVertical: '3%',
    },
    pic:{
        width:widthPercentageToDP('20%'),
        height:heightPercentageToDP('20%'),
        borderRadius:50,
    }
    
})
export default EditProfile;