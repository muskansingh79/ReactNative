import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      {product.discount && (
        <Text style={styles.discount}>Discount: {product.discount}%</Text>
      )}
      <Text style={styles.rating}>Rating: {product.rating}⭐</Text>
      <Text style={styles.description}>{product.description || "No description available."}</Text>
      <Text style={styles.reviews}>Reviews: {product.reviews ? product.reviews.join(', ') : "No reviews available."}</Text>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <Text style={styles.quantity}>{product.quantity || "Not specified"}</Text>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  discount: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviews: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantity: {
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
