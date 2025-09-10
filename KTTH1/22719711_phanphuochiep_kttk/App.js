import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import CalculatorApp from './components/CalculatorApp';
import KeyBoardCalculator from './components/KeyBoardCalculator';
import DisplayCalculator from './components/DisplayCalculator'

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <SafeAreaView style={styles.container}>
      <CalculatorApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
