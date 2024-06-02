import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

const ImageViewer = ({ PlaceholderImage }) => {
  return (

    <View style={styles.imageContainer}>
      <ImageBackground source={PlaceholderImage} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.innerText}>Presents</Text>
        </View>
      </ImageBackground>
    </View>

  );
}

export default ImageViewer;
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    marginBottom: -10,
  },
  imageBackground: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: 'white',
    fontSize: 16,
    opacity: 1,
  },
})
