
import React, {useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from '../components/Message';
import GetMessageList from '../controller/AdsController/GetMessageList';

export default function MessageList({route,navigaton}) {
    const [customerList,setCustomerList]=useState([]);
    const functions = require('firebase-functions');
    const admin = require('firebase-admin');
    admin.initializeApp();
    exports.getSubCollections = functions.https.onCall(async (data, context) => {
        var owner=route.params.apart.Owner;
        const docPath = "Chat/"+owner;
        const collections = await admin.firestore().doc(docPath).listCollections();
        const collectionIds = collections.map(col => col.id);
        console.log(collectionIds);
    });
    return (
        <ScrollView>
            <FlatList  
                keyExtractor={(customer) => customer.email}
                data={MessageList}
                renderItem={({customer}) =>(
                    <Message username={customer.name} />
                )}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
