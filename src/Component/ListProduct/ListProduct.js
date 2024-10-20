import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const ListProduct = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = ["All", "Roadbike", "Mountain"];

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://64591fcc8badff578e04ea01.mockapi.io/Car"
      );
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

    // Hàm lọc sản phẩm theo danh mục
    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter(product => product.category === category);
          setFilteredProducts(filtered);
        }
      };

  const renderProduct = ({ item }) => (
    <View
      style={{
        margin: 8,
        width: 160,
        height: 200,
        backgroundColor: "#fef5ec",
        borderRadius: 16,
      }}
    >
      <TouchableOpacity
        style={styles.productContainer}
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <Text
        style={{
          color: "#E94141",
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        The world’s Best Bike
      </Text>

      {/* Thanh chọn category */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => filterProductsByCategory(category)}
          >
            <Text style={{color: '#E9414187', fontSize: 16, fontWeight: 'bold'}}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  selectedCategoryButton: {
    borderColor: '#E9414187',
    borderWidth: 1
    
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 26,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {
    padding: 2,
    marginBottom: 15,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  productImage: {
    width: 120,
    height: 120,
    marginRight: 15,
    objectFit: "cover",
    marginBottom: 12
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginBottom: 4
  },
  productPrice: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});

export default ListProduct;
