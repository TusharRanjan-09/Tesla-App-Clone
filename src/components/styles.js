import { StyleSheet, Text, View, Dimensions } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container: {
        width: 400,
        height:759.5,
    },
    title: {
        color: 'black',
        fontSize:44.5,
        fontWeight: 'bold',
         marginTop: '30%',
         marginLeft: '33%'
    },
    title2: {
        color: 'grey',
        fontSize: 20, 
        marginLeft: '30%'
    },
    img: {
        width: '100%',
        height:'100%',
        position: 'absolute',
        resizeMode:'cover'
    },
    btnContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
  });
  export default styles;