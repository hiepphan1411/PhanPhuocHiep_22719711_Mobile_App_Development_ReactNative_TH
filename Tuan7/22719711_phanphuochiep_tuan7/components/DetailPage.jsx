import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function DetailPage({route}) {
  const {bike} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: bike.url}}
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.bikeName}>{bike.name}</Text>
        <Text style={styles.discountPrice}>${bike.price * 0.9}</Text>
        <Text style={styles.originalPrice}>${bike.price}</Text>
        <Text style={styles.description}>
         {bike.description}
        </Text>
      </View> 
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.favoriteButton}>
          <Image 
            source={require('../assets/heart.png')} 
            style={styles.heartIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    height: 180,
  },
  bikeImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  bikeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  discountPrice: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999999',
    textDecorationLine: 'line-through',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  heartIcon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#E94141',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});