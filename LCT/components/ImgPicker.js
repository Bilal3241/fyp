import React, { useState } from 'react';
import{ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { IMAGEASSETS } from '../assets/images';
import colors from '../config/colors';

function ImgPicker(props) {
const [usrImg, setImg]=useState(IMAGEASSETS.userIcon);
const selectFromGallery=()=>{
    ImagePicker.openPicker({
        cropping: true
      }).then(image => {
        console.log(image);
        setImg({uri: image.path})
      });
}
    return (
        <TouchableOpacity onPress={selectFromGallery}>
            <View style={styles.imgbg}> 
                <ImageBackground
                source={usrImg}
                style={styles.img}/>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    imgbg:{
        height:heightPercentageToDP('20%'),
        width: widthPercentageToDP('30%'),
        resizeMode: "contain",
        borderColor: colors.white,
        borderWidth: 3,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: '3%',
    },
    img:{
        height:'100%',
        width: '100%',
        resizeMode:'contain',
    },
})
export default ImgPicker;