import React, { Component ,useState, useEffect} from 'react';
import { View, Text,StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import {PERMISSIONS, request} from 'react-native-permissions'
import Geolocation from '@react-native-community/geolocation';
import {getAllPlaces} from '../controller/GetPlaces';
function DestDetails(){
  const [region, setRegion] = useState({
    latitude: 31.5698,
    longitude: 74.3120,
    latitudeDelta:  0.001,
    longitudeDelta: 0.008,
  });
  const [places, setPlaces] = useState([])
  const onPlacesRecieved=(places)=>{
    setPlaces(places)
}
  requestPermission = async ()=>{
    var resp=await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    if (resp==='granted') {
      locatePosition()
    }
  }
  locatePosition=() =>{
    Geolocation.getCurrentPosition(
      position =>{
        console.log(position)
        let initialPosition={
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta:  0.001,
            longitudeDelta: 0.008,
          }
        setRegion(initialPosition)
      }
    )
  }
  useEffect(() => {
    requestPermission();
    getAllPlaces(onPlacesRecieved)
  }, [])
  return (
   <View style={styles.container}>
     <MapView
     showsUserLocation={true}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={region}
       onRegionChangeComplete={region => setRegion(region)}
       >
       {places.map((marker,index)=>( 
      <Marker key={index} 
        coordinate={{ latitude: marker.Location._latitude, longitude: marker.Location._longitude}}
        title={marker.Title}
        description={"this is a marker"}
        onCalloutPress={e=>console.log("callout pressed")}>
      </Marker>
      ))} 
     </MapView>
   </View>
  );
}
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
export default DestDetails;