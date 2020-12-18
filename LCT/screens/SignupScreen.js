import React,{useState,useEffect} from 'react';
import { ImageBackground ,StyleSheet,View,Button, TouchableOpacity,Text,Image} from 'react-native';
import Icon from  '../components/Icon';
import Logo from '../components/Logo';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from '@react-native-community/google-signin';

import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
function SignupScreen(props) {
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          setloggedIn(true);
          alert('signed in');
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('Cancel');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
      useEffect(() => {
        GoogleSignin.configure({
          webClientId:
            '784726338195-haen1toc5ficjmv64ssp31mtet4sa3vk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      }, []);
      signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
          alert('signed out');
        } catch (error) {
          console.error(error);
        }
      };
    return (
    <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.background}>
        <View style={styles.container}>
            <Logo ctop='15'/>
            <Text style={styles.text}>
                Sign-up using your gmail
            </Text>
            {/* <Icon  imageName={require("../assets/gmail.png")} />
            <GoogleSigninButton
              onPress={this._signIn}
            /> */}
            <View style={styles.sectionContainer}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              />
            </View>
            <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button
                  onPress={this.signOut}
                  title="LogOut"
                  color="red"></Button>
              )}
            </View>
        
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
