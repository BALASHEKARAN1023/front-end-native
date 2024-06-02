import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Certi = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://example.com/background.png' }} // replace with your image URL or local asset
        style={styles.backgroundImage}
      >
        <Text style={styles.headerText}>Why Should You Join Airblack?</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statText}>Do-it-together, live on zoom</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>4.8 / 5 Rated Classes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statText}>35000+ Members</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.applyButton} onPress={() => {}}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-30
  },
  backgroundImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  statText: {
    fontSize: 16,
    color: '#000',
  },
  applyButton: {
    backgroundColor: '#ff1493',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Certi;
