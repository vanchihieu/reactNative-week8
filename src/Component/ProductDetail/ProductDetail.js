import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#E941411A",
          borderRadius: 12,
          marginTop: 20,
          height: 388,
          flexBasis: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>

      <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: 10 }}>
        {product.name}
      </Text>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={{ color: "#666", fontSize: 25, marginRight: 30 }}>
          {/* {product.salePercent * 100}% OFF I{" "} */}
          {product.price}$
        </Text>
        <Text style={{ textDecorationLine: "line-through", fontSize: 25 }}>
          {product?.price}$
        </Text>
      </View>
      <Text style={styles.description}>Description</Text>
      <Text style={{fontSize: 16, color: '#00000091'}}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <View style={{ marginTop: 36 }}>
        <TouchableOpacity
          style={{ backgroundColor: "#E94141", padding: 16, borderRadius: 18 }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productImage: {
    width: 360,
    height: 360,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: "green",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
});

export default ProductDetailScreen;
