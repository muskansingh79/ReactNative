import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/img.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#fff" />
        <Button title="Login" onPress={() => {}} color="#841584" />
        <Button
          title="Don't have an account? Register"
          onPress={() => navigation.navigate('Register')}
          color="#841584"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'white',
  },
});

export default LoginScreen;
