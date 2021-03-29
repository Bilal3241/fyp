import Firestore, { firebase } from '@react-native-firebase/firestore';

export async function getPlaces(placeRetrevived) {

const placesList=[];
var snapshot = await firebase.firestore()
.collection('Places').get()

 snapshot.forEach((doc)=>{
    placesList.push(doc.data());
 });
placeRetrevived(placesList);
}
