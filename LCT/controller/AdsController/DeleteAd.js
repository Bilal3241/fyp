import Firestore from '@react-native-firebase/firestore';

function DeleteAd(location) {
    return (
        
        Firestore().collection("Rooms").doc(location).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        })
        
    );
}
export default DeleteAd;