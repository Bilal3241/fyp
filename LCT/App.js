import React from 'react';
import EditProfile from './screens/Edit_Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Edit Profile">
        <Drawer.Screen name="Edit Profile" component={EditProfile} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    
  );
}
