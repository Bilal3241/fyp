import Firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';

function GetAllAds() {
    
    const [objLoop,seObjLoop]=useState([]);
   
    useEffect(
        () => {
            (async () => {
                Firestore().collection("Rooms").get().then((snapshot)=> {
                    snapshot.docs.forEach(doc=> {
                    objLoop.push(doc.data())
                    });
                    seObjLoop(objLoop)
                 
               
            })()
        }, [])

})
}

export default GetAllAds;