import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

const ChatShopScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://68ca0095ceef5a150f668d31.mockapi.io/product'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.imgUrl }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.shopName}>Shop {item.shop}</Text>
      </View>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => handleChatPress(item)}
        activeOpacity={0.7}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4FC3F7" barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../assets/ant-design_arrow-left-outlined.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('../assets/bi_cart-check.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat, với shop!
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        style={styles.productList}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/Group 10.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/Vector (Stroke).png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/Vector 1 (Stroke).png')}></Image>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    backgroundColor: '#4FC3F7',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cartButton: {
    padding: 8,
  },
  noticeContainer: {
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  noticeText: {
    fontSize: 14,
  },
  productList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
    lineHeight: 20,
  },
  shopName: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  chatButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    minWidth: 60,
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
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

export default ChatShopScreen;
