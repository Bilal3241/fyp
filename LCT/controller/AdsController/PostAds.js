import Firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function uploadAd(size, adData, images){
    
};
function PostAds(adData,edit, adPosted) {
        
        var imgs=[];
        Firestore().collection("Rooms").where("Location","==",adData.Location).get()
        .then(snap => {
        if(edit!=="myrooms"){
            var fileExtension;
        var filesName=[];
        for(var i=0;i<adData.images.length;i++){
            fileExtension=adData.images[i].uri.split('.').pop();
            var uid=uuidv4();
            filesName.push(uid+"."+fileExtension);
            var storageRef=storage().ref('Ads/images/'+filesName[i]);
            storageRef.putFile(adData.images[i].uri)
            .on(
                'state_changed',
                snapshot=>{
                    //console.log("snapshot: "+ snapshot.state);
                    //console.log("Progress: "+ (snapshot.bytesTransferred/snapshot.totalBytes)*100);
                    if (snapshot.state===storage.TaskState.SUCCESS){
                        console.log("image added successfully");
                        storageRef.getDownloadURL()
                        .then((downloadUrl)=>{
                       //console.log("File url: "+ downloadUrl);
                       imgs.push({uri: downloadUrl,});
                   }); 
                    }
                },
                error=>{
                    unsubscribe();
                    console.log("image upload error: "+ error.toString());
                },
                complete=>{
                   
                }
            );
        }
        };
         if(snap.size==0 || edit=="myrooms")//skip upload image
                    {
                        //console.log(adData);
                        Firestore().collection('Rooms').doc(adData.Location).set({
                            Charges: adData.Charges,
                            Description: adData.Description,
                            Images: imgs,
                            IsAvailable: adData.IsAvailable,
                            Location:adData.Location,
                            NoOfRooms:adData.NoOfRooms,
                            Owner:adData.email,
                            Title:adData.Title,
                
                        }).then(function() {
                            console.log("Document successfully written!");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        })
                    }else{
                        console.warn("already exist")
                    }
     })
    
}
        
export default PostAds;
/*fireauth.onAuthStateChanged(function(user) {
           if (user) {
               var user = fireauth.currentUser;
               firestore.collection("song").doc("Rock").set({

               })
               .then(function(){
                   console.log("Document successfully written!");
               })
               .catch(function(error){
                   console.error("Error writing document: ", error);
               })
           });
         }
         } else {
         // No user is signed in.
         console.log("not yet log in")
         }
         }); */