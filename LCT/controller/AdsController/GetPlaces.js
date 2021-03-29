import Firestore from '@react-native-firebase/firestore';

export async function getPlaces(areaName, placeRetrevived) {
var snapshot = await Firestore().collection("Places").where("Area", "==", areaName).get();
const placesList=[];
 snapshot.forEach((doc)=>{
    placesList.push(doc.data());
 });
placeRetrevived(placesList);
console.log("in here", placesList);
}
