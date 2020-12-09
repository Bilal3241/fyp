import React from 'react';
import { ImageBackground ,StyleSheet,View,TouchableOpacity,Text,Image} from 'react-native';
import Icon from  '../components/Icon';

import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
function SignupScreen(props) {
    return (
    <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}>
        <View style={styles.container}>

        <Image style={styles.logo}source={require("../assets/LogoLTG.png")}></Image> 
        
        <Text style={styles.text}>
        Sign-up using your gmail
        </Text>   
       
        <Icon  imageName={require("../assets/gmail.png")}/>
        
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
       
    },
    logo:{
        width:wp('80%'),
        height:hp('15%'),
        position:'absolute',
        top:hp('15%'),
        
    },
    text:{
        color:'#ffffff',
        position:'absolute',
        height: hp('15%'), 
        width:wp('75%'),
        top:hp('60%'),
        left:wp('24%'),
        fontSize:16,
        fontWeight:'bold'

    }
})

export default SignupScreen;
