import React from 'react';
import Home from './screens/Home';
import Splash from './screens/Splash';
import Post_add from './screens/Post_add';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Header,Container,Left,Icon} from 'native-base';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splash">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Post Add" component={Post_add} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    
  );
}
