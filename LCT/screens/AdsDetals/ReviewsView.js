import React, { useEffect, useState } from 'react';
import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField'; 
import { getReviews } from '../../controller/AdsController/GetReviews';
import Icon from 'react-native-vector-icons/Ionicons';  
import {FlatList, TouchableHighlight,Modal,View,StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { firebase } from '@react-native-firebase/firestore';
import PostReview from '../../controller/AdsController/PostReview';
import colors from '../../config/colors';
function ReviewsView(apartmentId) {
    var user=firebase.auth().currentUser;

    const [desc,setDesc]=useState('');
    
    const [ReviewModal, setReviewModal] = useState(false);

    const [reviewList,setReviewList]=useState([]);
    const onReviewsRecieved=(reviewList)=>{
        console.log(reviewList);
        setReviewList(reviewList);
    }
    useEffect(() => {
          getReviews(apartmentId, onReviewsRecieved);
        },[]);
    
    function Reviews() {
            var data={name:user.displayName,
            email:user.email,
            des:desc,
            photo:user.photoURL,
            item:{apartmentId}
        };
        PostReview(data);   }
    function onpress() {                                                                                                                                                                        
        setReviewModal(false);
    }
    
    return (
        <View>
            <Modal //review modal
           animationType="slide"
           transparent={true}
            visible={ReviewModal}>
            <View style={styles.modal}>
            <Icon name="close-outline" onPress={()=> setReviewModal(false)} size={50} color="black"></Icon>

            <Text style={styles.postReviewText} >
                Add a Review
            </Text>
            <InputField st={desc} setSt={setDesc} cwidth='50' pholder='Type your review'></InputField>
            <AppButton title="Post a Review" onPress={()=> {Reviews();onpress();setDesc("")} } width="50">
            </AppButton>
            </View>
        </Modal>

            <FlatList
                    keyExtractor={(item)=>item.id}
                    data={reviewList}
                    renderItem={({item})=>(
                        <View style={styles.reviewContainer}>
                            <Text>{item.data.name}</Text>
                            <Text>{item.data.comment}</Text>
                        </View>               
                    )}/>
            <AppButton  title="Post a Review" onPress={()=> setReviewModal(true)}></AppButton>
        </View>
    );
}
const styles = StyleSheet.create({
    reviewContainer:{
        padding: '4%',
        borderRadius:20,
        margin: '2%',
        elevation:15,
        backgroundColor:colors.white,
    },
    postReviewText:{
        color:colors.black,
        fontSize:hp('4%'),
    },
    modal:{
            width:wp('70%'),
            height:hp('40%'),
            marginTop:hp('25%') ,
            marginLeft:wp('15%'),
            backgroundColor: "white",
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
      }
})
export default ReviewsView;