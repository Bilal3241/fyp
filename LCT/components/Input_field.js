import React, { useState } from 'react';
import {TextInput, View,StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Input_field = ({height, pholder,st,setSt}) => {
    // const [text, setText] = useState('');
    return(
        <View style={{margin:2}}>
            <TextInput 
            style={[{height: hp((height+'%'))},styles.inp]}
            placeholder={pholder}
            onChangeText={st => setSt(st)}
            defaultValue={st}
            />
        </View>
    )
};
const styles=StyleSheet.create({
    inp:{
        width:wp('80%'),
        borderRadius:20,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderWidth:1,
        color:'black'
    }
})

export default Input_field;