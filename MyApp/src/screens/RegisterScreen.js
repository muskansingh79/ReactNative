import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/login.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Register</Text>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#fff" />
        <Button title="Register" onPress={() => {}} color="#841584" />
        <Button
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;
