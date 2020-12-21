import React,{useState} from 'react';
import {Button, Text, StyleSheet,ImageBackground,View} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../config/colors';
import InputField from '../components/InputField';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppButton from '../components/AppButton';
import { IMAGEASSETS } from '../assets/images';
import stylesheet from '../assets/stylesheet/stylesheet';

const ReserveRoom=()=>{
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

    return(
        <ImageBackground source={IMAGEASSETS.backgroundImage} style={stylesheet.backgroundImage}>
            <View style={stylesheet.bgView}>
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
                
                <InputField st={rooms} setSt={setRooms} pholder='No. of Rooms' keyboardType="numeric"></InputField>
                <Text style={styles.heading}>{fare}</Text>
                <AppButton title="Proceed to Payment " ></AppButton>
            </View>
        </ImageBackground>
    )


}
const styles=StyleSheet.create({
    heading:{
        fontSize:hp('6%'),
        color:colors.white,
        textAlign:'center'
    },
})

export default ReserveRoom;