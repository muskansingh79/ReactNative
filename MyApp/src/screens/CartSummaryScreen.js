import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useCart } from '../context/CartContext';

const CartSummaryScreen = ({ navigation }) => {
  const { state, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: parseInt(quantity, 10) } });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }) => {
    // Ensure that item.price is a number
    const price = typeof item.price === 'number' ? item.price : 0;
    
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.price}>${price.toFixed(2)}</Text> */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={item.quantity.toString()}
          onChangeText={(text) => handleQuantityChange(item.id, text)}
        />
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground 
      source={require('../../assets/img1.png')} // Replace with your background image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Cart Summary</Text>
        <FlatList
          data={state.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${calculateTotal()}</Text>
          <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    flex: 2,
  },
  price: {
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
  },
  input: {
    width: 60,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  removeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CartSummaryScreen;
