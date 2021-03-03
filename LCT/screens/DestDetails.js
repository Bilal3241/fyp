import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: '100%',
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

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

