import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,Dimensions } from 'react-native';
import cars from './data';
import Index from '../components/index';
const List = (props) => {
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
    return (
        <View style={{width:Width,height:Height, backgroundColor: 'red'}}>
            <FlatList
            data={cars}
            renderItem={({item,index})=> <Index car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />          
        </View>
    )
}
export default List;