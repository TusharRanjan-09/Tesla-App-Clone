import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import List from './src/container/List';
export default function App() {
  return (
    <View style={styles.container}>
      <List/>
      <StatusBar style='light' />
    </View>
  );
}
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
   width:Width,
   height: Height
  },
});
