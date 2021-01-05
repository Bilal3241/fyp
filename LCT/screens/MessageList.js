import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Message from '../components/Message';
import Firestore,{firebase} from '@react-native-firebase/firestore';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';

<<<<<<< HEAD
export default function MessageList({route,navigaton}) {
=======
function MessageList({route,navigation}) {
    const apart=route.params.apart;
>>>>>>> 76a891f14ff4d4bf73e1aece55d227a7e842761f
    const [msgList,setMsgList]=useState([]);
    useEffect(() => {
        const listref= Firestore().collection('Chat').doc(route.params.apart.Owner);
        listref.get().then(function(doc){
            if (doc.exists) {
                setMsgList(doc.data().collections);
            }
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList  
                keyExtractor={(item) => item.collection}
                data={msgList}
                renderItem={({item}) =>(
<<<<<<< HEAD
                     <Message username={item.customerName} nav={navigaton} />
=======
                     <Message username={item.customerName}   nav={navigation} apart={apart}  />
>>>>>>> 76a891f14ff4d4bf73e1aece55d227a7e842761f
                )}/>
            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // marginTop: heightPercentageToDP("10%"),
      },
<<<<<<< HEAD
})
=======
})

export default MessageList;
>>>>>>> 76a891f14ff4d4bf73e1aece55d227a7e842761f
