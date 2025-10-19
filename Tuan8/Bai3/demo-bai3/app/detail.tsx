import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailScreen() {
  const { selectedColor = "blue" } = useLocalSearchParams();
  const colorString = Array.isArray(selectedColor)
    ? selectedColor[0]
    : selectedColor;

  const phoneImages = {
    white: require("../assets/images/white.png"),
    red: require("../assets/images/red.png"),
    black: require("../assets/images/black.png"),
    blue: require("../assets/images/blue.png"),
  };

  const colorNames = {
    white: "Trắng",
    red: "Đỏ",
    black: "Đen",
    blue: "Xanh",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperSection}>
        <Image
          source={phoneImages[colorString]}
          style={styles.productImage}
          resizeMode="contain"
        />

        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <Text style={styles.colorName}>Màu: {colorNames[colorString]}</Text>

        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Image
              key={star}
              source={require("../assets/images/star.png")}
              style={styles.starIcon}
            />
          ))}
          <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity>
            <Text style={styles.questionIcon}>?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lowerSection}>
        <TouchableOpacity
          style={styles.colorSelectionButton}
          onPress={() => router.push("/color-selection")}
        >
          <Text style={styles.colorButtonText}>4 MÀU-CHỌN LOẠI</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  upperSection: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  lowerSection: {
    padding: 10,
    width: "100%",
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    alignSelf: "stretch",
  },
  colorName: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "stretch",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  reviewCount: {
    marginLeft: 5,
    color: "#333",
  },
  priceContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "#000",
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#888",
  },
  promotionContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  promotionText: {
    color: "red",
    fontWeight: "bold",
    marginRight: 5,
  },
  questionIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    textAlign: "center",
    color: "red",
  },
  colorSelectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
  colorButtonText: {
    fontWeight: "bold",
  },
  arrowIcon: {
    fontSize: 20,
  },
  buyButton: {
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
