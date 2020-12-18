import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import Post_add from './screens/Post_add';
import EditProfile from './screens/Edit_Profile';
import AdsList from './screens/Ads_List';
import SignupScreen from './screens/SignupScreen';
import Ads_Details from './screens/Ads_Details';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {Header,Container,Left,Icon} from 'native-base';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import Reserve_Room from './screens/Reserve_Room';
import  DrawerScreen  from './screens/DrawerScreen';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={props => <DrawerScreen {...props}/>}>
        <Drawer.Screen name="Ads Details" component={Ads_Details} />
        <Drawer.Screen name="SignupScreen" component={SignupScreen} />
        <Drawer.Screen name="ReserveRoom" component={Reserve_Room} />
        <Drawer.Screen name="Ads List" component={AdsList} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="PostAdd" component={Post_add} />
      </Drawer.Navigator>
   </NavigationContainer>
    
  );
}
export default App;
