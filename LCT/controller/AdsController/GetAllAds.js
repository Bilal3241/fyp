import Firestore, { firebase } from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
export async function GetAllAds(roomsRetrevived) {
//     const [objLoop,seObjLoop]=useState([]);
    
//     Firestore().collection("Rooms").get().then((snapshot)=> {
//       snapshot.docs.forEach(doc=> {
//       objLoop.push(doc.data())
//       });
//       seObjLoop(objLoop)
//   })
const [objLoop,seObjLoop]=useState([]);
var snapshot = await firebase.firestore()
.collection('Rooms')
.get()

snapshot.forEach((doc)=>{
    objLoop.push(doc.data());
});
console.log(objLoop);
roomsRetrevived(objLoop);
}

