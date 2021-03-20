import {useState} from 'react';
import React from 'react';
import {ScrollView,View,StyleSheet} from 'react-native';
import PicSlider from  '../../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../../components/AppButton';
import { IMAGEASSETS } from '../../assets/images';
import SegmentedControlTab from "react-native-segmented-control-tab";
import ReviewsView from './ReviewsView';
import DescriptionView from './DescriptionView';
import { onChange } from 'react-native-reanimated';
import { firebase } from '@react-native-firebase/firestore';
import colors from '../../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

function AdsDetails({route, navigation}) {
    var user=firebase.auth().currentUser;
    var images=route.params.apartment.Images;
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

   
    return (
        
        <ScrollView style={styles.background}> 
          
        <View>
        <PicSlider imageList={images} 
          height="30" width="100">
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
        <DescriptionView apartment={route.params.apartment} route={route} navigation={navigation} />
      ) : (
        <ReviewsView apartmentId={route.params.apartment.Location}/>
      )}
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


