/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList,Button, View} from 'react-native';
import { useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  const dispatch = useDispatch();
    const {loading,data,error} = useFetch(Config.API_PRODUCT_URL);
const handleProductSelect = id=>{
    navigation.navigate('DetailPage',{id});
};
    const renderProducts = ({item}) => <ProductCard product={item} onSelect={()=>{handleProductSelect(item.id);}}/>;

    if (loading) {
      return <Loading />;
    }
 if (error) {
      return <Error />;
    }
    return <View>
    <Button title="LogOut" onPress={()=>dispatch({type: 'SET_USER',payload:{user: null}})} />
    <FlatList data={data} renderItem={renderProducts}/>
     </View>;

};

export default Products;
