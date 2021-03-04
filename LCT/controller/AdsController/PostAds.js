import Firestore from '@react-native-firebase/firestore';

async function PostAds(adData,edit, adPosted) { 
    //console.log(adData);
    Firestore().collection("Rooms").where("Location","==",adData.Location).get()
    .then(async (snap) => {
        if(snap.size==0 || edit=="myrooms")//skip upload image
    {
        await Firestore().collection('Rooms').doc(adData.Location).set({
            Charges: adData.Charges,
            Description: adData.Description,
            Images: adData.images,
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