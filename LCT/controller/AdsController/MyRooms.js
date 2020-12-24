import Firestore, { firebase } from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
export async function MyRooms(roomsRetrevived) {
var user=firebase.auth().currentUser;
console.warn(user)
const roomsList=[];
var snapshot = await firebase.firestore()
.collection('Rooms').where("Owner", "==", "anzala").get()

 snapshot.forEach((doc)=>{
    roomsList.push(doc.data());
 });
console.warn(roomsList);
roomsRetrevived(roomsList);

}