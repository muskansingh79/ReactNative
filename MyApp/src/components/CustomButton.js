import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have react-native-vector-icons installed

const CustomButton = ({
  kind = 'primary',
  variant = 'contained',
  size = 'medium',
  iconOnly = false,
  icon = null,
  title,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[kind],
        styles[variant],
        styles[size],
        iconOnly && styles.iconOnly
      ]}
      onPress={onPress}
    >
      {icon && <Icon name={icon} size={20} style={styles.icon} />}
      {!iconOnly && <Text style={[styles.text, styles[`${kind}Text`]]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  primary: {
    backgroundColor: '#6200EE',
  },
  secondary: {
    backgroundColor: '#03DAC6',
  },
  contained: {
    borderWidth: 0,
  },
  outlined: {
    borderWidth: 1,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  large: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  iconOnly: {
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'black',
  },
});

export default CustomButton;
