import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from './context/FavoritesContext';
import AppNavigator from './navigation/AppNavigator';

export default function DemoBai4() {
  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}