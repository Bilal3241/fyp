import React,{useState} from 'react';
import {Button, Text, StyleSheet,ImageBackground,View} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../config/Colors';
import Input_field from '../components/Input_field';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppButton from '../components/App_Button';

const Reserve_Room=()=>{
    const [checkIn, setCheckIn] = useState(new Date('2020-12-20'));
    const [checkOut, setCheckOut] = useState(new Date('2020-12-21'));
    const [rooms, setRooms] = useState('');
    const [fare, setFare] = useState('');
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
        hideDatePicker();
      };
      var noOfDays=(checkOut.getTime()-checkIn.getTime())/86400000;

    return(
        <ImageBackground source={require("../assets/bg.jpg")} style={styles.image}>
            <View style={styles.bg}>
                <Text style={styles.heading}>Reserve Room</Text>
                <AppButton title="Check In" press={showDatePicker}></AppButton>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleInConfirm}
                  onCancel={hideDatePicker}
                />
                <AppButton title="Check Out" press={showDatePicker}></AppButton>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleOutConfirm}
                  onCancel={hideDatePicker}
                />
                
                <Input_field st={rooms} setSt={setRooms} pholder='No. of Rooms' keyboardType="numeric"></Input_field>
                <Text style={styles.heading}>{noOfDays}</Text>
                <AppButton title="Procede to Payment " ></AppButton>
            </View>
        </ImageBackground>
    )


}
const styles=StyleSheet.create({
    image:{
        flex:1,
        resizeMode: "cover",
    },
    bg:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:colors.bgcolor,
        width:'100%',
        height:'100%',
    },
    heading:{
        fontSize:hp('6%'),
        color:colors.white,
        textAlign:'center'
    },
})

export default Reserve_Room;