import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('Dây cáp usb');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://68ca0095ceef5a150f668d31.mockapi.io/products2'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderStars = (starCount) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Text key={i} style={{ color: i < starCount ? '#FFC107' : '#E0E0E0' }}>
          ★
        </Text>
      );
    }
    return <View style={styles.starContainer}>{stars}</View>;
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.url }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
      </Text>
      <View style={styles.ratingContainer}>
        {renderStars(item.star)}
        <Text style={styles.ratingText}>({item.numEval})</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{formatPrice(item.price)} đ</Text>
        <Text style={styles.saleText}>-{item.sale}%</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1AA6FB" barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../assets/ant-design_arrow-left-outlined.png')}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Image 
            source={require('../assets/whh_magnifier.png')} 
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Image style = {{width: '30px', height: '30px'}} source={require('../assets/store.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Image style = {{width: '25px', height: '20px'}} source={require('../assets/more.png')} />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1AA6FB',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  backButton: {
    padding: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 36,
    paddingVertical: 8,
    fontSize: 14,
  },
  cartButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  productList: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '48%',
    marginVertical: 8,
    padding: 10,
    alignItems: 'flex-start',
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    height: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  starContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  saleText: {
    fontSize: 12,
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4FC3F7',
    paddingVertical: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  navButton: {
    padding: 8,
  },
});

export default ProductListPage;
