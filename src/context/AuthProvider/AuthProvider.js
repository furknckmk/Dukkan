/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isAuthLoading,setAuthLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            setAuthLoading(false);

        });
    },[]);

    const store = createStore(reducers,{user, isAuthLoading});
    return <Provider store={store}>{children}</Provider>;

};

export default AuthProvider;
