import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

const ProductItem = ({ item, onPress, showFavoriteButton = true }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFav = isFavorite(item.id);

  const handleFavoritePress = () => {
    if (isFav) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(item)}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: item.imgUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <View style={styles.shopContainer}>
          <Text style={styles.shopLabel}>Shop: </Text>
          <Text style={styles.shopName}>{item.shop}</Text>
        </View>
        
        <Text style={styles.date}>
          Added: {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>
      
      {showFavoriteButton && (
        <TouchableOpacity 
          style={[styles.favoriteButton, isFav ? styles.favoriteActive : {}]} 
          onPress={handleFavoritePress}
        >
          <Ionicons 
            name={isFav ? "heart" : "heart-outline"} 
            size={22} 
            color={isFav ? "#fff" : "#777"} 
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
    paddingRight: 36, 
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  shopLabel: {
    fontSize: 14,
    color: '#666',
  },
  shopName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteActive: {
    backgroundColor: '#ff5722',
  },
});

export default ProductItem;