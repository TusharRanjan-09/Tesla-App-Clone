import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, Image } from 'react-native';
import styles from './styles';
import CustomButton from './CustomButton';
import Header from '../Header/index';
const Index = (props) => {

    return (
        <View style={styles.container}>
            <Header />
            <Image style={styles.img} source={props.car.uri} />
            <Text style={styles.title}>{props.car.name}</Text>
            <Text style={styles.title2}>{props.car.tagName}</Text>
            <View style={styles.btnContainer}>
                <CustomButton type="primary" content="Custom order" onPress={() => { alert('Custom order') }} />
                <CustomButton type="secondary" content="Existing Inventory" onPress={() => { alert('Existing Inventory') }} />
            </View>

        </View>
    )
}
export default Index;