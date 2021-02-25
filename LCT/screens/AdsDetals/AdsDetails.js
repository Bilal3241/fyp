import {useState} from 'react';
import React from 'react';
import {TouchableHighlight,Modal,ScrollView,View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import PicSlider from  '../../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../../components/AppButton';
import { IMAGEASSETS } from '../../assets/images';
import { firebase } from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';  
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SegmentedControlTab from "react-native-segmented-control-tab";
import ReviewsView from './ReviewsView';
import DescriptionView from './DescriptionView';
import { onChange } from 'react-native-reanimated';
import colors from '../../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

function AdsDetails({route, navigation}) {
    var user=firebase.auth().currentUser;

    const apart=route.params.apartment;
    var user=firebase.auth().currentUser;
    function setChatNav(){
        if(user.email==route.params.apartment.Owner){
            navigation.navigate('Messages',{apart})
        }
        else{
            navigation.navigate('Chat',{apart})
        }
    }

    const [tabIndex, setTabIndex]=useState(0);

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [flag, setFlag] = useState(false);
    
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
      const doReservation=()=>{
         var NoOfDays=(checkOut.getTime()-checkIn.getTime())/86400000;
         var price=NoOfDays*route.params.apartment.Charges;
        var reservationData={apartmentDetails: route.params.apartment, totalFare: price, daysOfStay: NoOfDays, inDate: checkIn.toDateString(), outDate: checkOut.toDateString()} //checkIn, outDate: checkOut }
        setReservationModal(false);
        navigation.navigate("StripePayment", {reservationData});
      };
    const [ReservationModal, setReservationModal] = useState(false);
    return (
        
        <ScrollView style={styles.background}> 
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

        <View>
          
        <PicSlider style={styles.picslider}>

        </PicSlider>
        </View>
        <View>
        <SegmentedControlTab
          values={["Details", "Reviews"]}
          selectedIndex={tabIndex}
          onTabPress={setTabIndex}
          tabStyle={styles.segmentTabStyle}
          activeTabStyle={styles.activeSegtmentTabStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyel}
        />
        {tabIndex === 0 ? (
        <DescriptionView apartment={route.params.apartment}/>
      ) : (
        <ReviewsView apartmentId={route.params.apartment.Location}/>
      )}
        </View>
        <View style={styles.btn}>
            {/* <AppButton title="Start Chat" width='45' onPress={setChatNav}></AppButton> */}
            <View style={styles.icons}>
              <IonIcons size={50}  name="chatbubbles-sharp" color={colors.btnBlue} onPress={setChatNav} ></IonIcons>
              <Text>Start Chat</Text>
            </View>
            <View>
              <IonIcons size={50}  name="bed-sharp" color={colors.btnBlue} onPress={()=> setReservationModal(true)} ></IonIcons>
              <Text>Reserve Room</Text>
            </View>




            {/* <AppButton  title="Reserve Room" width='45' onPress={()=> setReservationModal(true)}></AppButton> */}
            </View>
        </ScrollView>
        
      
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.white,
    },
    segmentTabStyle: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    activeSegtmentTabStyle: {
      borderBottomColor: colors.btnBlue,
      borderBottomWidth: 2,
      backgroundColor: 'transparent',
    },
    tabsContainerStyle: {
      width: '100%',
      height: hp('6%'),
      borderRadius: 0,
    },
    tabTextStyle: {
      fontWeight:'bold',
      fontSize: hp('3%'),
      paddingVertical:'3%',
      color: colors.btnBlue,
    },
    activeTabTextStyel: {
      fontWeight:'bold',
      fontSize: hp('4%'),
      color: colors.btnBlue,
      opacity: 1,
    },
    
    modal2:{
        flex:0.8,
        width:wp('65%'),
        marginTop:hp('25%') ,
        marginBottom:hp('25%'),
        marginLeft:wp('17%'),
        backgroundColor: 'rgba(190,190,190,0.9)',
        borderRadius: 20,
        alignItems: 'center',
},
chkInchkOutBTn:{
  flex:1,
  flexDirection:'row',
  justifyContent:"center"
},
date:{
  padding:wp('1%'),
  margin: wp('2%'),
  fontSize:15,
},
btn:{
  flex:1,
  flexDirection:'row',
  justifyContent:"center",
  marginTop:'3%',
},

openButton:{
  marginTop:hp("10%"),
  marginRight:wp('4%'),
  marginBottom:hp("10%"),
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  
},
icons:{
  padding:'2%'
}
// chkOutBtn:{
//   marginTop:hp("3%"),
//   marginLeft:wp('25%'),
  
//   backgroundColor: "#F194FF",
//   borderRadius: 20,
//   padding: 10,
//   elevation: 2
// },
  
     
})

export default AdsDetails;


