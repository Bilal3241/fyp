import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import PostAd from './screens/PostAd/PostAd';
import EditProfile from './screens/EditProfile';
import AdsList from './screens/AdsList';
import SignupScreen from './screens/SignupScreen';
import AdsDetails from './screens/AdsDetails';
import ReserveRoom from './screens/ReserveRoom';
import DrawerScreen  from './screens/DrawerScreen';
import Chat from './screens/Chat';
import colors from './config/colors';
import Icon from 'react-native-vector-icons/Ionicons';  
import { View } from 'native-base';
import MessageList from './screens/MessageList';

const HomeStack=createStackNavigator();
const DrawerStack=createDrawerNavigator();
let HomeScreenAction =   CommonActions.reset({
  index: 1,
  routes: [{ name: 'Home' },],
})
function DrawerStackfn() {
  return (
  <DrawerStack.Navigator initialRouteName="Home" options={{headerShown:false}} drawerContent={props => <DrawerScreen {...props}/>}>
    <DrawerStack.Screen name="Home" component={Home} options={{headerShown:false}} /> 
  </DrawerStack.Navigator>
   );
}
const App = () => {
  return (
    
      <NavigationContainer>
        <HomeStack.Navigator initialRouteName="Splash" screenOptions={(nav) =>({
           headerRight: () => (
            <Icon
              name="home" color={colors.white} style={{borderColor:"black", paddingRight:"2%"}} size={25}
              onPress={() => nav.navigation.dispatch(HomeScreenAction)}
            />),
          headerStyle: {
            backgroundColor: colors.btnBlue ,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        })
        }>
          <HomeStack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
          <HomeStack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
          <HomeStack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
          <HomeStack.Screen name='Home' component={DrawerStackfn} options={{headerShown:false}}/>
          <HomeStack.Screen name='AdsList' component={AdsList} />
          <HomeStack.Screen name='PostAd' component={PostAd} />
          <HomeStack.Screen name='AdsDetails' component={AdsDetails} />
          <HomeStack.Screen name='ReserveRoom' component={ReserveRoom} />
          <HomeStack.Screen name='Chat' component={Chat}/>
          <HomeStack.Screen name="Messages" component={MessageList}/>
        </HomeStack.Navigator>
      </NavigationContainer>
    
    );
}
export default App;
