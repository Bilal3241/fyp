import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';
import colors from '../config/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ImgPicker from '../components/ImgPicker';
import { IMAGEASSETS } from '../assets/images';
import stylesheet from '../assets/stylesheet/stylesheet';


function EditProfile({navigation}) {

    const [usrImg, setImg]=useState('');
    const [userName, setUsr]=useState('');
    const [email, setMail]=useState('');
    const [accountNum, setAccontNum]=useState('');
    const [contact, setContact]=useState('');
    return (
        <ImageBackground
        source={IMAGEASSETS.backgroundImage} style={stylesheet.backgroundImage}>
            <View style={stylesheet.bgView}>
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
    heading:{
        fontSize:heightPercentageToDP('6%'),
        color:colors.white,
        textAlign:'center',
        marginVertical: '3%',
    }    
})
export default EditProfile;