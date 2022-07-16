/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList,View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {

    const {loading,data,error} = useFetch(Config.API_URL);
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
    return <FlatList data={data} renderItem={renderProducts}/>;

};

export default Products;
