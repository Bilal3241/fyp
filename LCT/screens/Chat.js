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
    if(currentuser==owner){
        
    }
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


   async function handleSend(messages){
       const writes=messages.map(m=>chatref.add(m))
       await Promise.all(writes)

   }
    function sendMessage(msg){
     
    let data={
        Owner:route.params.apart.Owner,
        Location:route.params.apart.Location,
        Message:msg,
    }
   
    PostMessages(data); 
   }
    return (
        <GiftedChat 
        messages={messages} 
        user={usernow.email} 
        //onSend={messages => sendMessage(messages)}
        onSend={handleSend}

        />
        
    );
}

export default Chat;