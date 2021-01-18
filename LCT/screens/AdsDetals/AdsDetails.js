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
           
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={showDatePicker}>
              <Text style={styles.textStyle}>Check In</Text>
              <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  minimumDate={new Date()}
                />
            </TouchableOpacity>
                
                
                
                <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={showDatePicker}>
              <Text style={styles.textStyle}>Check Out</Text>
              <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  minimumDate={new Date(checkIn)}
            />
            </TouchableOpacity>
                
                                
                <Text>No. of Rooms: {route.params.apartment.NoOfRooms}</Text>
                <Text>chekIn: {checkIn.toDateString()}</Text>
                <Text>checkOut: {checkOut.toDateString()}</Text>
                {/*<Text>Days of Stay: {}</Text>
                <Text>Fare: {Fare} {}</Text>*/}
               
                
                <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
              
              <Text style={styles.textStyle} onPress={doReservation}>Proceed to Payment</Text>
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
            <AppButton title="Start Chat" width='45' onPress={setChatNav}></AppButton>
            <AppButton  title="Reserve Room" width='45' onPress={()=> setReservationModal(true)}></AppButton>
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
        width:wp('80%'),
        height:hp('70%'),
        marginTop:hp('15%') ,
        marginLeft:wp('10%'),
        backgroundColor: 'rgba(190,190,190,0.9)',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: "#000",
},
btn:{
  flex:1,
  flexDirection:'row',
  justifyContent:"center",
  marginTop:'3%',
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


