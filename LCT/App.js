import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import Post_add from './screens/Post_add';
import EditProfile from './screens/Edit_Profile';
import AdsList from './screens/Ads_List';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Header,Container,Left,Icon} from 'native-base';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import SignupScreen from './screens/SignupScreen';
import Reserve_Room from './screens/Reserve_Room';
const Drawer = createDrawerNavigator();
//<VectorIcon name='md-menu' size={40}></VectorIcon>
        
export default function App() {
  return (
    <NavigationContainer>
    
      <Drawer.Navigator initialRouteName="Splash">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Edit Profile" component={EditProfile} />
        <Drawer.Screen name="Post Add" component={Post_add} />
        <Drawer.Screen name="Signup Screen" component={SignupScreen} />
        <Drawer.Screen name="Reserve Room" component={Reserve_Room} />
        <Drawer.Screen name="Ads List" component={AdsList} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    
  );
}
