import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import PostAd from './screens/PostAd/PostAd';
import EditProfile from './screens/EditProfile';
import AdsList from './screens/AdsList';
import SignupScreen from './screens/SignupScreen';
import AdsDetails from './screens/AdsDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {Header,Container,Left,Icon} from 'native-base';
import ReserveRoom from './screens/ReserveRoom';
import  DrawerScreen  from './screens/DrawerScreen';
import auth from '@react-native-firebase/auth';


const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={props => <DrawerScreen {...props}/>}>
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="Splash" component={Splash}/>
        <Drawer.Screen name="PostAd" component={PostAd} />
        <Drawer.Screen name="Ads Details" component={AdsDetails} />
        <Drawer.Screen name="Ads List" component={AdsList} />
        <Drawer.Screen name="ReserveRoom" component={ReserveRoom} />
        <Drawer.Screen name="SignupScreen" component={SignupScreen} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
   </NavigationContainer>
    
  );
}
export default App;
