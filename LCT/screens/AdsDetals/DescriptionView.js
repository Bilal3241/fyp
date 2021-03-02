import React from 'react';
import {useState} from 'react';
import { View, TouchableHighlight,Modal,Image,TouchableOpacity,Text, StyleSheet, Linking } from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { firebase } from '@react-native-firebase/firestore';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';  
function DescriptionView({apartment,route,navigation}) {
   
    const apart=route.params.apartment;
    var user=firebase.auth().currentUser;
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    function setChatNav(){
        if(user.email==route.params.apartment.Owner){
            navigation.navigate('Messages',{apart})
        }
        else{
            navigation.navigate('Chat',{apart})
        }
    }
    const [ReservationModal, setReservationModal] = useState(false);
    
    const [flag, setFlag] = useState(false);
    
   
    
    const doReservation=()=>{
        var NoOfDays=(checkOut.getTime()-checkIn.getTime())/86400000;
        var price=NoOfDays*route.params.apartment.Charges;
       var reservationData={apartmentDetails: route.params.apartment, totalFare: price, daysOfStay: NoOfDays, inDate: checkIn.toDateString(), outDate: checkOut.toDateString()} //checkIn, outDate: checkOut }
       setReservationModal(false);
       navigation.navigate("StripePayment", {reservationData});
     };
     const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      
      
      const handleConfirm = (date) => {
        console.log(date.toDateString());
        if(flag == false){
          setCheckIn(new Date(date));
        hideDatePicker();
        setFlag(true);
        }
        if((flag == true)){
        setCheckOut(new Date(date));
        hideDatePicker();
        setFlag(false);
        }
      };
      
   
    return (
        <View style={styles.container}>
            <Modal
          animationType="slide"
          transparent={true}
          visible={ReservationModal}>
         
          <View style={styles.modal2}>

                    <Icon name="close-outline" style={styles.icon} style onPress={()=> setReservationModal(false)} size={50} color="black"></Icon>
              <View style={styles.chkInchkOutBTn}>  
                    <View>
                      <AppButton title="Check In" width='25'    onPress={showDatePicker}></AppButton>
                      <Text style={styles.date}>{checkIn.toDateString()}</Text>
                      <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode='date'
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                          minimumDate={new Date()}/>
                   </View>
                   <View>
                    <AppButton title="Check Out" width='30'    onPress={showDatePicker}></AppButton>
                    <Text style={styles.date}>{checkOut.toDateString()}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        minimumDate={new Date(checkIn)}/>
                  </View>
              </View>    

                 
    
              <TouchableHighlight style={styles.openButton}>
                  <Text   onPress={doReservation}>Proceed to Payment</Text>
                </TouchableHighlight>
            
            </View>
        </Modal>

            <View style={styles.detailbox}>
                <Text style={styles.title}>
                    {apartment.Title}
                </Text>

                <Text style={styles.heading}>
                    Location: <Text style={styles.description}>{apartment.Location}</Text>
                </Text>
                
                <Text style={styles.heading}>
                    Charges: <Text style={styles.description}>{apartment.Charges} </Text>
                </Text>
                <Text style={styles.heading}>
                    No of Rooms: <Text style={styles.description}>{apartment.NoOfRooms}</Text>
                </Text>
                <Text style={styles.heading}>
                    Description: <Text style={styles.description}>{'\n'}{apartment.Description} </Text>
                </Text>
            </View>
            <View style={styles.buttons}> 
                {/* <AppButton  title="Get Direction" onPress={() => Linking.openURL('google.navigation:q=100+101')}></AppButton> */}
               <View style={{alignItems:'center'}}>
                <IonIcons size={50} name="compass" color={colors.btnBlue} onPress={() => Linking.openURL('google.navigation:q=100+101')} ></IonIcons>
                <Text>Direction</Text>
                </View>
            {/* <AppButton title="Start Chat" width='45' onPress={setChatNav}></AppButton> */}
            <View style={{alignItems:'center'}}>
              <IonIcons size={50}  name="chatbubbles-sharp" color={colors.btnBlue} onPress={setChatNav} ></IonIcons>
              <Text>Start Chat</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <IonIcons size={50}  name="bed-sharp" color={colors.btnBlue} onPress={()=> setReservationModal(true)} ></IonIcons>
              <Text>Reserve Room</Text>
            </View>




            {/* <AppButton  title="Reserve Room" width='45' onPress={()=> setReservationModal(true)}></AppButton> */}
           
             </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding:'5%'
    },
    title:{
        color:colors.black,
        fontSize: hp('5%'),
        fontWeight:'bold',
        textAlign:'center'

    },
    heading:{
        color:colors.black,
        fontSize: hp('3%'),
        textAlign:'left',
        fontWeight:'bold',
        
    },
    detailbox:{
        padding:'6%',
        borderColor:colors.black,
        borderWidth:2,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor:colors.cardBg,
    },
    buttons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'3%',
    },
    description:{
        fontWeight:'normal',
        color:'grey',
        fontStyle:'italic',
        textAlign:'right'

    }
    
})
export default DescriptionView;