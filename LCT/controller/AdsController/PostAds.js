import Firestore from '@react-native-firebase/firestore';

function PostAds(adData, adPosted) {
    return (
        Firestore().collection('Rooms').doc(adData.longitude+adData.latitude).set({
            Charges: adData.Charges,
            Description: adData.Description,
            Images: adData.Images,
            IsAvailable: adData.IsAvailable,
            Location:adData.longitude+','+adData.latitude,
            NoOfRooms:adData.NoOfRooms,
            Owner: "Bilal",
            Title:adData.Title,

        }).then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        })
    );
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