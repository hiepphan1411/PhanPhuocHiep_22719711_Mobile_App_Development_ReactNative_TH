import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCheckout() {
  const [quantity, setQuantity] = useState(1);
  const [unitPrice] = useState(141800); 
  const [totalPrice, setTotalPrice] = useState(unitPrice);
  
  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
  }, [quantity, unitPrice]);
  
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  // Tăng số lượng
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleCheckout = () => {
    Alert.alert(
      "Đặt hàng thành công",
      `Bạn đã đặt ${quantity} sản phẩm với tổng giá trị ${formatPrice(totalPrice)} đ`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productRow}>
          <Image
            style={styles.productImage}
            source={require('../assets/book.jpg')}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.sellerInfo}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.priceText}>
              {formatPrice(unitPrice)} đ
            </Text>
            <View style={styles.quantityContainer}>
              <Pressable 
                style={[styles.quantityButton, quantity === 1 && styles.disabledButton]} 
                onPress={decreaseQuantity}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Pressable 
                style={styles.quantityButton} 
                onPress={increaseQuantity}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </Pressable>
              <Text style={styles.viewDetailText}>Xem tại đây</Text>
            </View>
          </View>
        </View>

        <View style={styles.discountContainer}>
          <View style={styles.discountBox}>
            <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
            <Text style={styles.viewDiscountsText}>Xem tại đây</Text>
          </View>
          <View style={styles.couponContainer}>
            <View style={styles.couponInputContainer}>
              <View style={styles.yellowTag}></View>
              <Text style={styles.couponText}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.orderQuestionContainer}>
          <Text style={styles.orderQuestionText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={styles.enterHereText}>Nhập tại đây?</Text>
        </View>

        <View style={styles.orderSummaryContainer}>
          <View style={styles.orderSummaryRow}>
            <Text style={styles.orderSummaryLabel}>Tạm tính</Text>
            <Text style={styles.orderSummaryPrice}>{formatPrice(totalPrice)} đ</Text>
          </View>
        </View>

        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Thành tiền</Text>
            <Text style={styles.totalPrice}>{formatPrice(totalPrice)} đ</Text>
          </View>
          <TouchableOpacity 
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 8,
  },
  productRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  productImage: {
    width: 100,
    height: 160,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sellerInfo: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 18,
    color: '#FF424E',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    width: 25,
    height: 25,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  viewDetailText: {
    marginLeft: 20,
    color: '#1A94FF',
    fontSize: 14,
  },
  discountContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  discountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  discountText: {
    fontSize: 14,
    color: '#333333',
  },
  viewDiscountsText: {
    fontSize: 14,
    color: '#1A94FF',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  couponInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 4,
    padding: 8,
    flex: 1,
    marginRight: 10,
  },
  yellowTag: {
    width: 20,
    height: 20,
    backgroundColor: '#FFC107',
    marginRight: 10,
  },
  couponText: {
    color: '#999999',
    fontSize: 14,
  },
  applyButton: {
    backgroundColor: '#0A5EB7',
    borderRadius: 4,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orderQuestionContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  orderQuestionText: {
    fontSize: 14,
    flex: 2,
  },
  enterHereText: {
    fontSize: 14,
    color: '#1A94FF',
    flex: 1,
    textAlign: 'right',
  },
  orderSummaryContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  orderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummaryLabel: {
    fontSize: 14,
    color: '#333333',
  },
  orderSummaryPrice: {
    fontSize: 14,
    color: '#FF424E',
    fontWeight: 'bold',
  },
  totalContainer: {
    padding: 15,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: '#333333',
  },
  totalPrice: {
    fontSize: 16,
    color: '#FF424E',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF424E',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});