import {useState} from 'react';
import React from 'react';
import {Linking,TouchableHighlight,Alert,Modal,ScrollView,View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import PicSlider from  '../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../components/AppButton';
import { IMAGEASSETS } from '../assets/images';
import stylesheet from '../assets/stylesheet/stylesheet';
import InputField from '../components/InputField'; 
import Firestore, { firebase } from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';  
import PostReview from '../controller/AdsController/PostReview';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from 'react-native-gesture-handler';
function AdsDetails({route, navigation}) {
    var user=firebase.auth().currentUser;

    const [desc,setDesc]=useState(route.params.description);
    const [displayName, setdisplayName]=useState(user.displayName);
    const [email, setMail]=useState(user.email);
    const [photo, setPhotoURL]=useState(user.photoURL);

    function Reviews() {
        var data={name:user.displayName,
            email:user.email,
            des:desc,
            photo:user.photoURL,
            item:route.params.apartment.Location
        };
        PostReview(data);
       
    }

    function onpress() {                                                                                                                                                                        
        setModalOpen(false);
    }

    function redirectGoogleMaps(){
    }

    const [checkIn, setCheckIn] = useState(new Date('2020-12-20'));
    const [checkOut, setCheckOut] = useState(new Date('2020-12-21'));
    const [rooms, setRooms] = useState('');
    const [fare, setFare] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    console.log(checkIn);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleInConfirm = (date) => {
        setCheckIn(new Date(date.toDateString()));
        console.warn("Check In has been picked: ", date.toDateString());
        hideDatePicker();
      };
      const handleOutConfirm = (date) => {
        setCheckOut(new Date(date.toDateString()))
        console.warn("Check Out has been picked: ", date.toDateString());
        setFare((checkOut.getTime()-checkIn.getTime())/86400000);
        hideDatePicker();
      };
      var noOfDays=(checkOut.getTime()-checkIn.getTime())/86400000;

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    return (
        
        <ScrollView style={styles.background}> 
           <Modal
           animationType="slide"
           transparent={true}
            visible={modalOpen}>
            <View style={styles.modal}>
            <Icon name="close-outline" style={styles.icon} style onPress={()=> setModalOpen(false)} size={50} color="black"></Icon>

            <Text style={styles.postReviewText} >
                Post a Review
            </Text>
            <InputField style={styles.reviewBox} st={desc} setSt={setDesc} cheight='30' pholder='Type your review'></InputField>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={()=> {Reviews();onpress();setDesc("")} }>
              <Text style={styles.textStyle}>Post Review</Text>
            </TouchableHighlight>
            {/* <AppButton  title="Post" onPress={()=> {Reviews();onpress();setDesc("")} }></AppButton> */}
            </View>
        </Modal>
           {/* NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}
           <Modal
           animationType="slide"
           transparent={true}
            visible={modalOpen2}>
         
            <View style={styles.modal2}>
            <Icon name="close-outline" style={styles.icon} style onPress={()=> setModalOpen2(false)} size={50} color="black"></Icon>
           
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={showDatePicker}>
              <Text style={styles.textStyle}>Check In</Text>
            </TouchableHighlight>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleInConfirm}
                  onCancel={hideDatePicker}
                />
                
                
                <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={showDatePicker}>
              <Text style={styles.textStyle}>Check Out</Text>
            </TouchableHighlight>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleOutConfirm}
                  onCancel={hideDatePicker}
                />
                
                
                
                <TextInput placeholder= 'No. of Rooms' onChangeText={setRooms} defaultValue={rooms}></TextInput>
                <Text style={styles.heading}>{fare}</Text>
               
                <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
           >
              <Text style={styles.textStyle}>Proceed to Payment</Text>
            </TouchableHighlight>
            </View>
        </Modal>



            {/* NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}     
            <Text style={styles.text}>
                {route.params.apartment.Title}
            </Text>

            <PicSlider style={styles.picslider}>

            </PicSlider>
            <Text style={styles.text}>
                {route.params.apartment.Title}
            </Text>

            <Text style={styles.location}>
                 {route.params.apartment.Location}
            </Text>
            <Text style={styles.description}>
                 {route.params.apartment.Description} 
              
            </Text>
            <Text style={styles.description2}>
                 Charges: {route.params.apartment.Charges}  No of Rooms: {route.params.apartment.NoOfRooms}
            </Text>
            <View style={styles.btn}>
            <AppButton  title="Reserve Room" onPress={()=> setModalOpen2(true)}></AppButton>
            <AppButton title="Start Chat" press={()=>alert("Start Chat")}></AppButton>
            <AppButton  title="Get Direction" onPress={() => Linking.openURL('google.navigation:q=100+101')}></AppButton>
            <AppButton  title="Post a Review" onPress={()=> setModalOpen(true)}></AppButton>
            <AppButton  title="Make Payment" onPress={()=>navigation.navigate('StripePayment')}></AppButton>
            </View>
        </ScrollView>
        
      
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"rgb(192,192,192)",
        
    },
   
    text:{
        color:'#ffffff',
        position:'absolute',
        top:hp('36%'),
        left:wp('10%'),
        fontSize:25,
        fontWeight:'bold'

    },
    location:{
        color:'#ffffff',
        position:'absolute',
        top:hp('42%'),
        left:wp('10%'),
        fontSize:20,
        

    },
    description:{
        color:'#ffffff',
        position:'absolute',
        top:hp('47%'),
        left:wp('10%'),
        fontSize:18,
       
    },
    description2:{
        color:'#ffffff',
        position:'absolute',
        top:hp('50%'),
        left:wp('10%'),
        fontSize:18,
       
    },
    btn:{
        marginTop:hp('17%'),
        left:wp('3%')
    },
   
    postReviewText:{
       
       
        color:'#000000',
        fontSize:20,
    },
    reviewBox:{ 
        backgroundColor:'#ffffff',
        
      },
    modal:{
            width:wp('70%'),
            height:hp('40%'),
            marginTop:hp('25%') ,
            marginLeft:wp('15%'),
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: "#000",
    },
    modal2:{
        width:wp('80%'),
        height:hp('70%'),
        marginTop:hp('15%') ,
        marginLeft:wp('10%'),
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: "#000",
},
    openButton: {
        marginTop:hp("5%"),
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
})

export default AdsDetails;


