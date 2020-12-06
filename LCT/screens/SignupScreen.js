import React from 'react';
import { ImageBackground ,StyleSheet,View,TouchableOpacity,Text,Image} from 'react-native';
import Fb from '../components/Fb';
import Gmail from '../components/Gmail';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../components/Logo';
import colors from '../config/colors';

function SignupScreen(props) {
    return (
    <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}>
        <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>
        Sign-up using facebook or gmail
        </Text>   
        
        <Fb />
        <Gmail/>
        </View>
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        resizeMode: "cover",
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        height:'100%',
        width: '100%',
        backgroundColor: colors.bgcolor,
       
    },
    text:{
        color:'#ffffff',
        position:'absolute',
        height: hp('15%'), 
        width:wp('75%'),
        top:hp('50%'),
        left:wp('15%'),
        fontSize:16,
        fontWeight:'bold'
       

    }
})

export default SignupScreen;