import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

// Import your background image
import backgroundImage from '../../assets/img2.png'; // Replace with your actual image path

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <CustomButton
          title="Go to Products"
          kind="primary"
          variant="contained"
          size="large"
          onPress={() => navigation.navigate('ProductList')} 
        />
        <CustomButton
          title="View Cart"
          kind="secondary" // Standardize the button kind
          variant="contained" // Standardize the variant
          size="large" // Standardize the size
          onPress={() => navigation.navigate('CartSummary')}
        />
        <CustomButton
          title="Go to Profile"
          kind="primary"
          variant="contained"
          size="large"
          onPress={() => navigation.navigate('Profile')}
        />
        {/* <CustomButton
          icon="home"
          kind="primary" // Standardize the button kind
          variant="contained" // Standardize the variant
          size="large" // Standardize the size
          iconOnly
          onPress={() => console.log('Home Icon Pressed')}
        /> */}
        <CustomButton
          title="Go to Welcome"
          kind="secondary"
          variant="contained"
          size="large"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff', // Text color for better visibility against the background
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your preference
    justifyContent: 'center',
  },
});

export default HomeScreen;
