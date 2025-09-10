import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function DisplayCalculator({displayValueIn}) {
  return (
    <View style={styles.container}>
      {/* Hien thi */}
      <View style={styles.display}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {displayValue}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#202020',
  },
  displayText: {
    fontSize: 70,
    color: 'white',
  }
});