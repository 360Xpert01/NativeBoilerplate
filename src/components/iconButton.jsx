import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const IconButton = ({ source, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image source={source} style={styles.iconImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 iconImage: {
    width: 18, // Increase width for better visibility
    height: 18, // Increase height for better visibility
    resizeMode: "contain", // Prevent distortion of the image
  },
});

export default IconButton;