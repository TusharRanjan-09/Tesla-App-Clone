import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton(props) {
    const type = props.type;
    const backgroundColor = type ==="primary" ? '#171A20CC' : 'white'
    const textColor = type ==="primary" ? 'white' : '#171A20CC'
  return (
    <View style={styles.container}>
    <TouchableOpacity style={[styles.btnPrimary, {backgroundColor: backgroundColor}]} onPress={props.onPress}>
        <Text style={[styles.primary, {color: textColor}]}>{props.content}</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding:10  
  },
  btnPrimary: {
  
      height:40,
      borderRadius:20,
      justifyContent: 'center',
      alignItems:'center'
  },
  primary: {
      fontSize:15,
      fontWeight: 'bold',
      textTransform: 'uppercase'
  }
});
