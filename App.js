import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import MyComponent from './compounds/MComponent';
import ImageViewer from './compounds/ImageViewer';
// import Button from './compounds/Button';
const PlaceholderImage = require('./assets/sea.png');
export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer PlaceholderImage={PlaceholderImage} />
    <MyComponent PlaceholderImage={PlaceholderImage} />
    <StatusBar style="auto" />
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
});