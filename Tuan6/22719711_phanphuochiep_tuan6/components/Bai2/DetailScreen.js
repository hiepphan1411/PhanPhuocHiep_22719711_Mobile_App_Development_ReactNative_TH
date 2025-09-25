import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {getColorProperties} from './useProductData'

const DetailScreen = ({ route, navigation }) => {
  const { selectedColor, product, selectedImageUrl } = route.params || {};

  const color = selectedColor || (product?.colors?.[0] || 'blue');
  const colorProps = getColorProperties(color);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productContainer}>
          <Image 
            source={{ uri: selectedImageUrl }}
            style={styles.productImage} 
            resizeMode="contain" 
          />
          
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.colorName}>Màu: {colorProps.label}</Text>
          
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <Image source={require("../../assets/star.png")}/>
            ))}
            <Text style={styles.reviewCount}>(Xem {product.numEval} đánh giá)</Text>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
            {product.price !== product.priceSale && (
              <Text style={styles.oldPrice}>{product.priceSale.toLocaleString()} đ</Text>
            )}
          </View>
          
          <View style={styles.promotionContainer}>
            <Text style={styles.promotionText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <TouchableOpacity>
              <Text style={styles.questionIcon}>?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.colorSelectionButton}
            onPress={() => navigation.navigate('ColorSelection', { product })}
          >
            <Text style={styles.colorButtonText}>{product.colors.length} MÀU-CHỌN LOẠI</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>CHỌN MUA</Text>
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
  productContainer: {
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  colorName: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  reviewCount: {
    marginLeft: 5,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000',
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  promotionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  promotionText: {
    color: 'red',
    fontWeight: 'bold',
    marginRight: 5,
  },
  questionIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
    color: 'red',
  },
  colorSelectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  colorButtonText: {
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: 20,
  },
  buyButton: {
    backgroundColor: 'red',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailScreen;
