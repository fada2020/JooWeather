import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Vibe from './Vibration';
export default function App() {
  return <Vibe />;
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>Hello, I made a JooWeather app???</Text>
  //     <StatusBar style="light" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:28,
    color: "red",
  },
});
