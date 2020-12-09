import React from 'react';
import { TouchableOpacity,View ,Image,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Icon(props) {
    return (
        
    <TouchableOpacity  onPress={()=>{alert("you clicked gmail")}}>
       <Image style={styles.button} 
       source={props.imageName}/>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{

        borderRadius:hp('20%'),
        borderRadius:hp('50%'),
        marginTop:hp('63%'),
        margin:hp('5%'),
        height:hp('10%'),
        width:wp('60%')
    },
})
export default Icon;
