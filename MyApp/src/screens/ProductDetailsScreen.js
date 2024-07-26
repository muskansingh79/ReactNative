import React from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground } from 'react-native';
import { useCart } from '../context/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    navigation.navigate('CartSummary');
  };

  return (
    <ImageBackground 
      source={require('../../assets/img1.png')} // Replace with your background image path
      style={styles.background}
    >
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
        <View style={styles.buttonContainer}>
          <Button title="Add to Cart" onPress={handleAddToCart} />
          <View style={styles.buttonSpacing} />
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Optional, to add a white overlay
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSpacing: {
    width: 10,
  },
});

export default ProductDetailsScreen;
