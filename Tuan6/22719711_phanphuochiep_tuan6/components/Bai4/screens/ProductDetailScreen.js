import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Share,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchProducts } from '../api/productApi';
import { useFavorites } from '../context/FavoritesContext';

const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        setLoading(true);
        // Fetch all products and find the specific one by ID
        // In a real app, you'd have an endpoint to get a single product
        const products = await fetchProducts();
        const foundProduct = products.find(p => p.id === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Failed to load product details:', err);
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [productId]);

  useEffect(() => {
    if (product) {
      navigation.setOptions({
        title: product.name,
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity 
              style={styles.headerButton} 
              onPress={handleShare}
            >
              <Ionicons name="share-outline" size={22} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={handleToggleFavorite}
            >
              <Ionicons 
                name={isFavorite(productId) ? "heart" : "heart-outline"} 
                size={22} 
                color={isFavorite(productId) ? "blue" : "#333"} 
              />
            </TouchableOpacity>
          </View>
        ),
      });
    }
  }, [product, isFavorite(productId)]);

  const handleToggleFavorite = () => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else if (product) {
      addToFavorites(product);
    }
  };

  const handleShare = async () => {
    if (!product) return;
    
    try {
      await Share.share({
        message: `Check out this product: ${product.name}`,
      });
    } catch (error) {
      console.error('Error sharing product:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff5722" />
        <Text style={styles.loadingText}>Loading product details...</Text>
      </View>
    );
  }

  if (error || !product) {
    return (
      <View style={styles.centered}>
        <Ionicons name="alert-circle-outline" size={50} color="#ff3b30" />
        <Text style={styles.errorText}>{error || 'Product not found'}</Text>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Format date to be more readable
  const formattedDate = new Date(product.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: product.imgUrl }} 
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        
        <View style={styles.shopContainer}>
          <Ionicons name="storefront-outline" size={18} color="#666" />
          <Text style={styles.shopText}>{product.shop}</Text>
        </View>
        
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={18} color="#666" />
          <Text style={styles.dateText}>Added on {formattedDate}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            This is a high-quality product available from {product.shop}. 
            Perfect for everyday use and made with premium materials.
            The unique design and functionality make it a must-have item.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          {[
            'Premium quality materials',
            'Elegant design',
            'Durable construction',
            'Versatile functionality'
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={[
            styles.favoriteButton, 
            isFavorite(productId) ? styles.favoriteActive : {}
          ]} 
          onPress={handleToggleFavorite}
        >
          <Ionicons 
            name={isFavorite(productId) ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite(productId) ? "#fff" : "#ff5722"} 
          />
          <Text style={[
            styles.favoriteText, 
            isFavorite(productId) ? styles.favoriteActiveText : {}
          ]}>
            {isFavorite(productId) ? 'In Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    marginTop: 12,
    fontSize: 16,
    color: '#ff3b30',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#ff5722',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: width * 0.8,
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  shopText: {
    fontSize: 15,
    color: '#666',
    marginLeft: 6,
    fontWeight: '500',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 14,
    color: '#777',
    marginLeft: 6,
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  descriptionText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#444',
  },
  actionContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
  favoriteButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ff5722',
  },
  favoriteActive: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
  },
  favoriteText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#ff5722',
  },
  favoriteActiveText: {
    color: 'white',
  },
  buyButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductDetailScreen;