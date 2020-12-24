import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import PostAd from './screens/PostAd/PostAd';
import EditProfile from './screens/EditProfile';
import AdsList from './screens/AdsList';
import SignupScreen from './screens/SignupScreen';
import AdsDetails from './screens/AdsDetails';
import ReserveRoom from './screens/ReserveRoom';
import  DrawerScreen  from './screens/DrawerScreen';

const Stack=createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Splash}>
      <Stack.Screen name='AdsList' component={AdsList} />
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='PostAd' component={PostAd} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
       
        <Stack.Screen name='AdsDetails' component={AdsDetails} />
        <Stack.Screen name='ReserveRoom' component={ReserveRoom} />
      </Stack.Navigator>

  
      {/* <Drawer.Navigator  drawerContent={props => <DrawerScreen {...props}/>}>
        <Drawer.Screen name="EditProfile" component={EditProfile} />
        <Drawer.Screen name="Splash" component={Splash}/>
        <Drawer.Screen name="PostAd" component={PostAd} />
        <Drawer.Screen name="Ads Details" component={AdsDetails} />
        <Drawer.Screen name="Ads List" component={AdsList} />
        <Drawer.Screen name="ReserveRoom" component={ReserveRoom} />
        <Drawer.Screen name="SignupScreen" component={SignupScreen} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator> */}
   </NavigationContainer>
    
  );
}
export default App;
