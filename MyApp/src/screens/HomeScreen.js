import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <CustomButton
        title="Go to Profile"
        kind="primary"
        variant="contained"
        size="large"
        onPress={() => navigation.navigate('Profile')}
      />
      {/* <CustomTextInput
        label="Age"
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      /> */}
      {/* <CustomButton
        title="Save Age"
        kind="primary"
        variant="contained"
        size="large"
        onPress={handleSaveAge}
      /> */}
      <CustomButton
        icon="home"
        kind="secondary"
        variant="outlined"
        size="small"
        iconOnly
        onPress={() => console.log('Home Icon Pressed')}
      />
      <CustomButton
        title="Go to Welcome"
        kind="primary"
        variant="contained"
        size="large"
        onPress={() => navigation.navigate('Welcome')}
      />
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

export default HomeScreen;
