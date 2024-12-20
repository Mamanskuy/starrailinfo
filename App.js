import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { COLORS } from './src/constants/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <AppNavigator />
    </NavigationContainer>
  );
}