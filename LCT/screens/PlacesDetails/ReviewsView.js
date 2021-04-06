import React, { useEffect, useState } from 'react';
import AppButton from '../../components/AppButton';
import { getReviews } from '../../controller/AdsController/GetReviews';
import {FlatList, View,StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PostReview from '../../controller/AdsController/PostReview';
import colors from '../../config/colors';

function ReviewsView({apartmentId}) {
    const [desc,setDesc]=useState('');
    const [reviewList,setReviewList]=useState([]);
    return (
        <View style={styles.bg}>
            <FlatList
                keyExtractor={(item)=>item.id}
                data={reviewList}
                renderItem={({item})=>(
                    <View style={styles.reviewContainer}>
                        <Text>{item.data.name}</Text>
                        <Text>{item.data.comment}</Text>
                    </View>               
                )}/>
           
        </View>
    );
}
const styles = StyleSheet.create({
    reviewContainer:{
        padding: '4%',
        margin: '2%',
        backgroundColor:colors.white,
        borderBottomColor: colors.btnBlue,
        borderBottomWidth: 2,
    },
    postReviewText:{
        color:colors.white,
        fontSize:hp('4%'),
    },
    modalBg:{
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    modal:{
        width:wp('70%'),
        height:hp('40%'),
        marginTop:hp('25%') ,
        marginLeft:wp('15%'),
        backgroundColor: 'rgba(120,120,120,0.9)',
        borderRadius: 20,
        padding: '5%',
        alignItems: 'center',
        elevation:15,
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
    },
    bg:{
        flex:1,
        backgroundColor: colors.bgcolor,
        width:'100%',
        height:'100%',
        paddingHorizontal:'5%',
    },
})
export default ReviewsView;
