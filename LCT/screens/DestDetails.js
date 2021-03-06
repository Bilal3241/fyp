import React, { Component } from 'react';
import { View, Text } from 'react-native';

<<<<<<< HEAD
function DestDetails(){
  return (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
      }
export default DestDetails;


// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GooglePlacesInput = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyBu0-yQ-guUuzeJuSROa30n9yeTD87CTH0',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default GooglePlacesInput;
=======
 function DestDetails({navigation}) {
    return (
        <View>
          <Text> DestDetails </Text>
        </View>
      );
  }
export default DestDetails;
   
  
>>>>>>> parent of e5c2696... map view added (sample code in dest detail screen)

