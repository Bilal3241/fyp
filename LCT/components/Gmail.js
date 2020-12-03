import React from 'react';
import { View ,Image,StyleSheet, TouchableOpacity} from 'react-native';

function Gmail(props) {
    return (
        <TouchableOpacity onPress={()=>{alert("you clicked gamil")}}>
       <Image style={styles.button} 
       source={require("../assets/gmail3.jpg")}/>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
   
    button:{
        backgroundColor:'#ffffff',
        height: 92, 
        width:98,
        borderRadius:50,
        marginTop:473,
        margin:20
    }
})
export default Gmail;