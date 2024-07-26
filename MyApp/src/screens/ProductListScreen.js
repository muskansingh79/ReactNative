import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ProductList from '../components/ProductList'; // Import the ProductList component

// Import your background image
import backgroundImage from '../../assets/img1.png'; // Replace with your actual image path

const ProductListScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ProductList />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a semi-transparent overlay for better readability
  },
});

export default ProductListScreen;
