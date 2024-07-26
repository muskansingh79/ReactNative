import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/img2.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to MyShoppingApp!</Text>
        <Button
          title="Get Started"
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
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
