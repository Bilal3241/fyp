import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function GetMessageList(owner) {
    const functions = require('firebase-functions');
    const admin = require('firebase-admin');
    admin.initializeApp();
    exports.getSubCollections = functions.https.onCall(async (data, context) => {
        var owner=route.params.apart.Owner;
        const docPath = "Chat/"+owner;
        const collections = await admin.firestore().doc(docPath).listCollections();
        const collectionIds = collections.map(col => col.id);
        return { collections: collectionIds };
    });
}

const styles = StyleSheet.create({})



