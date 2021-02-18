import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './src/container/List';
export default function App() {
  return (
    <View style={styles.container}>
      <List/>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
