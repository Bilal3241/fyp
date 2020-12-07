import React from 'react';
import { ImageBackground ,StyleSheet,View,TouchableOpacity,Text,Image} from 'react-native';
import Icon from  '../components/Icon';

import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
import colors from '../config/colors';
function SignupScreen(props) {
    return (
    <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}>
        <View style={styles.container}>
        <Logo ctop='15'/>
        
        <Text style={styles.text}>
        Sign-up using facebook or gmail
        </Text>   
        
        <Icon  imageName={require("../assets/fb1.png")}/>
        <Icon  imageName={require("../assets/gmail3.jpg")}/>
        
        </View>

    </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode: "cover",
      
    },
    container:{
        flex:1,    
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.bgcolor
       
    },
    text:{
        color:colors.white,
        position:'absolute',
        height: hp('15%'), 
        width:wp('75%'),
        top:hp('60%'),
        left:wp('20%'),
        fontSize:16,
        fontWeight:'bold'
       

    }
})

export default SignupScreen;