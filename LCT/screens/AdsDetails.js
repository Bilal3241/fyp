import {useState} from 'react';
import React from 'react';
import {Alert,Modal,ScrollView,View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import PicSlider from  '../components/PicSlider';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from '../components/AppButton';
import { IMAGEASSETS } from '../assets/images';
import stylesheet from '../assets/stylesheet/stylesheet';
import InputField from '../components/InputField'; 
import Firestore, { firebase } from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';  
import PostReview from '../controller/AdsController/PostReview';
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

    const [modalOpen, setModalOpen] = useState(false);
    return (
        
        <ScrollView style={styles.background}> 
           <Modal
            animationType="slide"
            visible={modalOpen}>
            <View style={styles.modal}>
            <Icon name="close-outline" onPress={()=> setModalOpen(false)} size={50} color="black"></Icon>

            <Text style={styles.postReviewText} >
                Post a Review
            </Text>
            <InputField style={styles.reviewBox} st={desc} setSt={setDesc} cheight='30' pholder='Type your review'></InputField>
            <AppButton  title="Post" onPress={Reviews}></AppButton>
            </View>
        </Modal>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("Go to back bage... hahahhahahaha")}}>
                <Image 
                    source={IMAGEASSETS.leftArrow}/>
            </TouchableOpacity>
            <Text style={styles.text}>
                {route.params.apartment.Title}
            </Text>

            <PicSlider style={styles.picslider}>

            </PicSlider>
          
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
            <AppButton  title="Reserve Room" press={()=>alert("Reserve Room")}></AppButton>
            <AppButton title="Start Chat" press={()=>alert("Start Chat")}></AppButton>
            <AppButton  title="Get Direction" press={()=>alert("Get Direction")}></AppButton>
            <AppButton  title="Post a Review" onPress={()=> setModalOpen(true)}></AppButton>
            </View>
        </ScrollView>
        
    
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"rgb(192,192,192)",
        
    },
    button:{
        position:'absolute',
        top:hp('2%'),
        left:wp('8%'),
    },
    text:{
        color:'#ffffff',
        position:'absolute',
        top:hp('2%'),
        left:wp('20%'),
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
       
        left:wp('10%'),
        color:'#000000',
        fontSize:20,
    },
    reviewBox:{ 
        backgroundColor:'#ffffff',
        left:wp('15%'),
      },
    modal:{
        top:hp('25%'),
        flex:0.5,
        justifyContent:'space-around'
    },
   
   
})

export default AdsDetails;