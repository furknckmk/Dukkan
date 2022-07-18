/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,Image, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Login.style';
import Config from 'react-native-config';

import usePost from '../../hooks/usePost';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation})=>{
    const {data,loading,error,post} = usePost();

const LoginSchema = yup.object().shape({
username: yup.string().min(3,({min})=>'Kullanici adi en az 3 karakter olmalidir').required('Kullanici adi gerekli '),

password: yup.string().min(5,({min})=>`Sifre en az ${min} karakter olmalidir`).required('Sifre gereklidir'),

    });
    function handleLogin(values) {
       post(Config.API_AUTH_URL, values);

    }
    if (error){
        Alert.alert('Dukkan','Bir Hata Olustu');
    }
    if (data) {
        if (data.status === 'Error') {
        Alert.alert('Dukkan','Kullanici Bulunamadi');
        }
        else {
            AsyncStorage.setItem('@USER',JSON.stringify(user));
            navigation.navigate('ProductPage');
        }

    }


    console.log(data);
    return (
    <View style={styles.container}>
         <View style={styles.logo_container}>

        <Image style={styles.logo} source={require('../../assets/Giris.png')}/>

        </View>
        <Formik
        initialValues={{username: '', password:''}} onSubmit={handleLogin}
        validateOnMount={true}
        validationSchema={LoginSchema}
        >

        { ({handleSubmit,handleChange,values,touched,errors,isValid}) =>(<View style={styles.body_container}>

        <Input placeholder="Kullanici Adinizi Giriniz" value={values.username} onType={handleChange('username')} iconName={'account'}/>

        {errors.username && touched.username  ? ( <Text style={styles.errors}>{(errors.username)}</Text>) : null}

        <Input placeholder="Sifrenizi Giriniz" value={values.password} onType={handleChange('password')}  iconName={'key'}
            isSecure
        />

        {(errors.password && touched.password) &&
            <Text style={styles.errors}>{(errors.password)}</Text>
        }
        <Button text="Giris Yap" onPress={handleSubmit} loading={loading}/>

        </View>
        )}
        </Formik>
     </View>
    );
};

export default Login;

const user = {'address':{'geolocation':{'lat':'-37.3159','long':'81.1496'},'city':'kilcoole','street':'new road','number':7682,'zipcode':'12926-3874'},'id':1,'email':'john@gmail.com','username':'johnd','password':'m38rmF$','name':{'firstname':'john','lastname':'doe'},'phone':'1-570-236-7033','__v':0};

