import Firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

function EditProfile() {
    var data={};
    var user = auth().currentUser;
    var ref= Firestore().collection('Users').doc(user.email);
    ref.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
            var userData=docSnapshot.data();
            data={name:userData.Name,email:userData.Email,photo:userData.Image,accountNo:userData.AccountNo,contactNo:userData.PhoneNo,edit:true};
        }
    });
    return data;
}
export default EditProfile;