import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Screen Imports
import Home from './screens/Home.js';
import Activity from './screens/Activity.js';
import Profile from './screens/Profile.js';
import Search from './screens/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
