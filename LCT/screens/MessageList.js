import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from '../components/Message';
import Firestore,{firebase} from '@react-native-firebase/firestore';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';

function MessageList({route,navigation}) {
    const apart=route.params.apart;
    const [msgList,setMsgList]=useState([]);
    useEffect(() => {
        const listref= Firestore().collection('Chat').doc(route.params.apart.Owner);
        listref.get().then(function(doc){
            if (doc.exists) {
                setMsgList(doc.data().collections);
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList  
                keyExtractor={(item) => item.collection}
                data={msgList}
                renderItem={({item}) =>(
                     <Message username={item.customerName}   nav={navigation} apart={apart}  />
                )}/>
            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // marginTop: heightPercentageToDP("10%"),
      },
})

export default MessageList;