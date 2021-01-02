import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Message(username) {
    return (
        <View style={styles.item}>
            <Text>username</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        height:hp('20%'),
        borderBottomColor:'black',
        borderBottomWidth:1,
    }
})
