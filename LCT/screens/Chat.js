import React, { useEffect, useState,useCallback } from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import { firebase } from '@react-native-firebase/firestore';
import PostMessages from '../controller/AdsController/PostMessages';
import Firestore from '@react-native-firebase/firestore';

function Chat({navigation,route}) {
    console.log(route);
    
    var usernow=firebase.auth().currentUser;
    var owner=route.params.apart.Owner;
    var location=route.params.apart.Location;
    var currentuser=usernow.email;
    const chatref= Firestore().collection('Chat').doc(owner).collection(usernow.email+"-"+owner+"-"+location);
    const [messages,setMessages]=useState([]);
   useEffect(()=>{
       const load=chatref.onSnapshot(querySnapshot=>{
         const messageDB=querySnapshot.docChanges().filter(({type})=>type==='added')
                                      .map(({doc})=>{
                                          const message=doc.data()
                                          return {...message,createdAt:message.createdAt.toDate()}
                                        }).sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
                                      appendMessages(messageDB)
       })
       return () => load()
   },[])

   const appendMessages = useCallback(
    (messages) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
)
   function updateArray(messages){
    const listref= Firestore().collection('Chat').doc(owner);
    listref.get().then(function(doc){
        if (doc.exists) {
            const customerList=doc.data().collections;
            const newElement=usernow.email+"-"+owner+"-"+location;
            const item={collection:newElement,customerName:usernow.displayName,customerId:usernow.email}
            // if (customerList.includes(newElement) === false) 
            //     {customerList.push(newElement);}
            if (!(customerList.some(elem => elem.collection === newElement))) {
                customerList.push(item);
            }
            listref.set({
               collections:customerList, 
            }).then(function(){
                (async () => {
                    console.log(customerList);
                    const writes=messages.map(m=>chatref.add(m))
                    await Promise.all(writes)
                })();
            })
        }
    })
  }
    return (
        <GiftedChat 
        messages={messages} 
        user={{email:usernow.email}} 
        onSend={updateArray}
        />
        
    );
}

export default Chat;

