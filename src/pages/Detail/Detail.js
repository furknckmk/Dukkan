/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,Image } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const Detail = ({route})=>{
    const {id} = route.params;
    const {loading,data,error} = useFetch(`${Config.API_PRODUCT_URL}/${id} `);
    console.log(id);
    if (loading) {
        return <Loading />;
      }
   if (error) {
        return <Error />;
      }
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{uri: data.image}}/>
        <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.detail}>{data.description}</Text>
            <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>);
};
export default Detail;
