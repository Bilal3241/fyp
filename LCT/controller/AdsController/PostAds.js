import Firestore from '@react-native-firebase/firestore';

function PostAds(adData, adPosted) {
    
        Firestore().collection("Rooms").where("Location","==",adData.Location).get()
        .then(snap => {
            console.warn("size"+snap.size)
        if(snap.size==0)
        {
            Firestore().collection('Rooms').doc(adData.Location).set({
                Charges: adData.Charges,
                Description: adData.Description,
                Images: adData.Images,
                IsAvailable: adData.IsAvailable,
                Location:adData.Location,
                NoOfRooms:adData.NoOfRooms,
                Owner: "anzala",
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
    
    return;
    
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