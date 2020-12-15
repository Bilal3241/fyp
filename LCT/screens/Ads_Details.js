import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import PicSlider from  '../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../components/App_Button';

function Ads_Details(props) {
    return (
        
        <View style={styles.background}> 
            <TouchableOpacity style={styles.button} onPress={()=>{alert("Go to back bage... hahahhahahaha")}}>
                <Image 
                    source={require('../assets/left-arrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>
                Ad's Title
            </Text>

            <PicSlider style={styles.picslider}>
           
            </PicSlider>
            <Text style={styles.location}>
                 PF Chang Hotel 
            </Text>
            <Text style={styles.description}>
                 MiniMarket Gulberg 3,Lahore. 
            </Text>
            <View style={styles.btn}>
            <AppButton  title="Reserve Room" press={()=>alert("Reserve Room")}></AppButton>
            <AppButton title="Start Chat" press={()=>alert("Start Chat")}></AppButton>
            <AppButton  title="Get Direction" press={()=>alert("Get Direction")}></AppButton>
            </View>
        </View>
    
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"rgb(192,192,192)",
        
    },
    picslider:{
       
    },
    text:{
        color:'#ffffff',
        position:'absolute',
        top:hp('5%'),
        left:wp('20%'),
        fontSize:25,
        fontWeight:'bold'

    },
    location:{
        color:'#ffffff',
        position:'absolute',
        top:hp('45%'),
        left:wp('10%'),
        fontSize:20,
        

    },
    description:{
        color:'#ffffff',
        position:'absolute',
        top:hp('53%'),
        left:wp('10%'),
        fontSize:18,
    },
    btn:{
        marginTop:hp('20%'),
        left:wp('5%')
    },
    button:{
        position:'absolute',
        top:hp('5%'),
        left:wp('8%'),
    }
})

export default Ads_Details;