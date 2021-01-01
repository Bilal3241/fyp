import React, { useState } from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import { firebase } from '@react-native-firebase/firestore';
import PostMessages from '../controller/AdsController/PostMessages';

function Chat({navigation,route}) {
    console.warn(route);
    console.log("123");
    var usernow=firebase.auth().currentUser;
   const [messages,setMessages]=useState([]);

   const sendMessage=(msg)=>{
     
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
        onSend={messages => sendMessage(messages)}

        />
        
    );
}

export default Chat;