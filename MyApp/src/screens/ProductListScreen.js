import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList'; // Import the ProductList component

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <ProductList /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProductListScreen;
