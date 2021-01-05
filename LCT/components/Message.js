import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

<<<<<<< HEAD
export default function Message({nav,username}) {
    console.log(nav);
    return (
        <View style={styles.item}>
            <Text>{username}</Text>
        </View>
=======
export default function Message({username,nav,apart}) {
    return (
        
        <TouchableOpacity style={styles.item} onPress={()=>nav.navigate('Chat',{apart})}>
            <Text>{username}</Text>
        </TouchableOpacity>
        
>>>>>>> 76a891f14ff4d4bf73e1aece55d227a7e842761f
    )
}

const styles = StyleSheet.create({
    item:{
<<<<<<< HEAD
        height:hp('10%'),
=======
        height:hp('7%'),
>>>>>>> 76a891f14ff4d4bf73e1aece55d227a7e842761f
        borderBottomColor:'black',
        borderBottomWidth:1,
    }
})
