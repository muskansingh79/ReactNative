import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton';

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
    // Here you can handle the save functionality, such as updating the state or making an API call
    console.log('Profile saved:', { name, email, age });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <CustomTextInput
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        editable={isEditing}
      />
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        editable={isEditing}
      />
      <CustomTextInput
        label="Age"
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        editable={isEditing}
      />
      {isEditing ? (
        <CustomButton
          title="Save"
          kind="primary"
          variant="contained"
          size="large"
          onPress={handleSave}
        />
      ) : (
        <CustomButton
          title="Edit"
          kind="secondary"
          variant="contained"
          size="large"
          onPress={handleEdit}
        />
      )}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;
