import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import StartedPage from './components/StartedPage.jsx';
import ListBikePage from './components/ListBikePage.jsx';
import DetailPage from './components/DetailPage.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartedPage">
        <Stack.Screen
          name="StartedPage"
          component={StartedPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListBikePage"
          component={ListBikePage}
          options={{ title: "Bike List" }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{ title: "Bike Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
