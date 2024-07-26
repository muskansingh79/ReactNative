import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

// Import your background image
import backgroundImage from '../../assets/img2.png'; // Replace with your actual image path

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [age, setAge] = useState('30');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle save functionality here, like updating the state or making an API call
    console.log('Profile saved:', { name, email, age });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Profile</Text>
          <CustomTextInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            editable={isEditing}
            style={styles.input}
          />
          <CustomTextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            style={styles.input}
          />
          <CustomTextInput
            label="Age"
            placeholder="Enter your age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            editable={isEditing}
            style={styles.input}
          />
          {isEditing ? (
            <CustomButton
              title="Save"
              kind="primary"
              variant="contained"
              size="large"
              onPress={handleSave}
              style={styles.button}
            />
          ) : (
            <CustomButton
              title="Edit"
              kind="secondary"
              variant="contained"
              size="large"
              onPress={handleEdit}
              style={styles.button}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better readability
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
});

export default ProfileScreen;
