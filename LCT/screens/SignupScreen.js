import React from 'react';
import { ImageBackground ,StyleSheet,View,TouchableOpacity,Text,Image} from 'react-native';
import Fb from '../components/Fb';
import Gmail from '../components/Gmail';

function SignupScreen(props) {
    return (
    <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}>
        <View style={styles.container}>
        <Image style={styles.logo}source={require("../assets/LogoLTG.png")}></Image> 
        
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
        width:284,
        height:107,
        position:'absolute',
        top:100,
        
    },
    text:{
        color:'#ffffff',
        position:'absolute',
        height: 36, 
        width:382,
        top:450,
        left:70,
        fontSize:16,
        fontWeight:'bold'
       

    }
})

export default SignupScreen;