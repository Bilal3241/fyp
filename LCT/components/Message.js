import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function Message({username,nav,apartment,userEmail}) {
    apart={
        'Location':apartment.Location,
        'Owner':apartment.Owner,
        'Customer':userEmail,
    }
    return (
        
        <TouchableOpacity style={styles.item} onPress={()=>nav.navigate('Chat',{apart})}>
            <Text>{username}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    item:{
        height:hp('7%'),
        borderBottomColor:'black',
        borderBottomWidth:1,
    }
})
