import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    title: 'Hydrating Face Cream',
    price: '29.99',
    rating: 4.6,
    discount: 15,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9wApLKvRvvrSekYP7DQQVjoF09wry2ep3A&s', // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Vitamin C Serum',
    price: '45.00',
    rating: 4.8,
    discount: 10,
    image: 'https://thedeconstruct.in/cdn/shop/files/VitaminC_Clearing4.jpg?v=1718347177&width=1500', // Replace with actual image URL
  },
  {
    id: '3',
    title: 'Nourishing Shampoo',
    price: '19.99',
    rating: 4.5,
    discount: 5,
    image: 'https://horbaxindia.com/wp-content/uploads/2022/09/4.jpg', // Replace with actual image URL
  },
  {
    id: '4',
    title: 'Matte Lipstick',
    price: '15.99',
    rating: 4.7,
    discount: 20,
    image: 'https://www.reneecosmetics.in/cdn/shop/files/renee-stunner-matte-lipstick-4gm-renee-cosmetics-11.jpg?v=1691477163', // Replace with actual image URL
  },
  {
    id: '5',
    title: 'Rejuvenating Night Cream',
    price: '50.00',
    rating: 4.9,
    discount: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOevwsbOGq-gALgYjex_5ytm4CRVF8awq9Q&s', // Replace with actual image URL
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
    padding: 10,
  },
});

export default ProductList;
