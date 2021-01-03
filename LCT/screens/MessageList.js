
import React, {useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from '../components/Message';
import Firestore,{firebase} from '@react-native-firebase/firestore';

export default function MessageList({route,navigaton}) {
    const collectionList= [];
    var docref= firebase.firestore().collection('Chat').doc(route.params.apart.Owner);
    docref.get().then(function (doc){
        if (doc.exists) {
            console.log(doc.data())
        }
    })
    
    return (
        <ScrollView>
            {/* <FlatList  
                keyExtractor={(customer) => customer.email}
                data={MessageList}
                renderItem={({customer}) =>(
                    <Message username={customer.name} />
                )}
            /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
