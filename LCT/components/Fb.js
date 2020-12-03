import React from 'react';
import { TouchableOpacity,View ,Image,StyleSheet} from 'react-native';

function Fb(props) {
    return (
        
    <TouchableOpacity  onPress={()=>{alert("you clicked facebook")}}>
       <Image style={styles.button} 
       source={require("../assets/fb1.png")}/>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        height: 92, 
        width:98,
        borderRadius:50,
        marginTop:473,
        margin:20,
    },
})
export default Fb;