import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const ColorSelectionScreen = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState('blue'); // Default color
  
  const colors = [
    { name: 'white', code: '#ffffff' },
    { name: 'red', code: '#F30D0D' },
    { name: 'black', code: '#000000' },
    { name: 'blue', code: '#234896' },
  ];
  
  const phoneImages = {
    white: require('../../assets/white.png'),
    red: require('../../assets/red.png'),
    black: require('../../assets/black.png'),
    blue: require('../../assets/blue.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topContainer}>
          <Image 
            source={phoneImages[selectedColor]} 
            style={styles.phoneImage} 
            resizeMode="contain"
          />
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneTitle}>Điện Thoại Vsmart Joy 3</Text>
            <Text style={styles.phoneSubtitle}>Hàng chính hãng</Text>
            {selectedColor === 'red' && <Text style={styles.colorLabel}>Màu: đỏ</Text>}
            {selectedColor === 'blue' && <Text style={styles.colorLabel}>Màu: xanh</Text>}
            {selectedColor === 'black' && <Text style={styles.colorLabel}>Màu: đen</Text>}
            {selectedColor === 'white' && <Text style={styles.colorLabel}>Màu: Trắng</Text>}
            <Text style={styles.price}>1.790.000 đ</Text>
          </View>
        </View>

        <View style={styles.colorSelectionContainer}>
          <Text style={styles.sectionTitle}>Chọn một màu bên dưới:</Text>

          <View style={styles.colorOptions}>
            {colors.map((color) => (
              <TouchableOpacity
                key={color.name}
                style={[
                  styles.colorOption, 
                  { backgroundColor: color.code },
                  selectedColor === color.name && styles.selectedColor
                ]}
                onPress={() => setSelectedColor(color.name)}
              />
            ))}
          </View>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => navigation.navigate('Detail', { selectedColor })}
          >
            <Text style={styles.confirmButtonText}>XONG</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
  },
  phoneImage: {
    width: 80,
    height: 100,
    marginRight: 15,
  },
  phoneInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  phoneTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneSubtitle: {
    fontSize: 15,
    marginBottom: 5,
  },
  colorLabel: {
    fontSize: 15,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  colorSelectionContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 16
  },
  colorOptions: {
    alignItems: 'center',
    marginVertical: 2,
  },
  colorOption: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 5,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: '#000',
  },
  confirmButton: {
    backgroundColor: '#4D6DC1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ColorSelectionScreen;
