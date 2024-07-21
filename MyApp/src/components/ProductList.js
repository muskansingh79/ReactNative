import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    title: 'Product 1',
    price: '10.00',
    rating: 4.5,
    discount: 10,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Product 2',
    price: '20.00',
    rating: 4.0,
    discount: 15,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Product 3',
    price: '30.00',
    rating: 3.5,
    discount: 20,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '4',
    title: 'Product 4',
    price: '40.00',
    rating: 5.0,
    discount: 5,
    image: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  const [numColumns, setNumColumns] = useState(2);

  const toggleNumColumns = () => {
    setNumColumns((prevNumColumns) => (prevNumColumns === 2 ? 1 : 2));
  };

  return (
    <View style={styles.container}>
      <Button title={`Switch to ${numColumns === 2 ? 1 : 2} per row`} onPress={toggleNumColumns} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns} // Important to re-render the list when the number of columns change
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductList;
