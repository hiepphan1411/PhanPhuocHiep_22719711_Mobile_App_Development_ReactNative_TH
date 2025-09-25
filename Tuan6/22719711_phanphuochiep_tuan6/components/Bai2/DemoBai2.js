import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
// Import các màn hình
import HomeScreen from './HomeScreen';
import ColorSelectionScreen from './ColorSelectionScreen'
import DetailScreen from './DetailScreen'

const Tab = createBottomTabNavigator();

const DemoBai2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Phone Selection' }} 
        />
        <Stack.Screen 
          name="ColorSelection" 
          component={ColorSelectionScreen} 
          options={{ title: 'Select Color' }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{ title: 'Phone Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DemoBai2;