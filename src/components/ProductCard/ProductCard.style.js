/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {backgroundColor: '#eceff1',
                borderWidth: 1,
                borderColor: '#f4b400',
                margin: 10,flexDirection:'row'},
    image: {width:100,minHeight:100,resizeMode:'contain',backgroundColor: 'white'},
    body_container: {flex:1,padding:5,justifyContent:'space-between'},
    title: {fontWeight:'bold'},
    price: {textAlign:'right'},


});
