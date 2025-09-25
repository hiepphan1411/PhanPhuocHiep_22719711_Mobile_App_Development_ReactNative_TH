import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {getColorProperties} from "./useProductData"

const ColorSelectionScreen = ({ route, navigation }) => {
  const { product } = route.params || {};
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'blue');
  
  const getImageIndex = (colorName) => {
    if (!product || !product.colors) return 0;
    return product.colors.indexOf(colorName);
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topContainer}>
          <Image 
            source={{ uri: product.img[getImageIndex(selectedColor)] }} 
            style={styles.phoneImage} 
            resizeMode="contain"
          />
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneTitle}>{product.name}</Text>
            <Text style={styles.colorLabel}>
              Màu: {getColorProperties(selectedColor).label}
            </Text>
            <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
          </View>
        </View>

        <View style={styles.colorSelectionContainer}>
          <Text style={styles.sectionTitle}>Chọn một màu bên dưới:</Text>

          <View style={styles.colorOptions}>
            {product.colors.map((colorName) => {
              const colorProps = getColorProperties(colorName);
              return (
                <TouchableOpacity
                  key={colorName}
                  style={[
                    styles.colorOption, 
                    { backgroundColor: colorProps.code },
                    selectedColor === colorName && styles.selectedColor
                  ]}
                  onPress={() => setSelectedColor(colorName)}
                />
              );
            })}
          </View>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => navigation.navigate('Detail', { 
              selectedColor,
              product,
              selectedImageUrl: product.img[getImageIndex(selectedColor)]
            })}
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
