import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from '../components/Message';
import Firestore,{firebase} from '@react-native-firebase/firestore';

export default function MessageList({route,navigaton}) {
    // const collectionList= [];
    // var docref= firebase.firestore().collection('Chat').doc(route.params.apart.Owner);
    // docref.get().then(function (doc){
    //     if (doc.exists) {
    //         console.log(doc.data())
    //     }
    // })
    const msgList=[];
    useEffect(() => {
        const listref= Firestore().collection('Chat').doc(route.params.apart.Owner);
        listref.get().then(function(doc){
            if (doc.exists) {
                msgList=doc.data().collections;
            }
        })
    }, [])

    return (
        <ScrollView>
            <FlatList  
                keyExtractor={(customer) => customer.collection}
                data={msgList}
                renderItem={({customer}) =>(
                    <Message username={customer.customerName} />
                )}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})