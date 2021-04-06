import React from 'react';
import {useState} from 'react';
import {ScrollView,View,StyleSheet} from 'react-native';
import PicSlider from  '../../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../../components/AppButton';
import { IMAGEASSETS } from '../../assets/images';
import SegmentedControlTab from "react-native-segmented-control-tab";
import ReviewsView from './ReviewsView';
import DescriptionView from './DescriptionView';
import colors from '../../config/colors';

function PlacesDetails({navigation,route}){
   
    const [tabIndex, setTabIndex]=useState(0);

   
    return (
        
        <ScrollView style={styles.background}> 
          
            {/* <View>
            
                <PicSlider height="30" width="100" >
                </PicSlider>
            </View> */}
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
                <DescriptionView  route={route} navigation={navigation} />
            ) : (
                <ReviewsView />
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
    
    
     
})


export default PlacesDetails;
