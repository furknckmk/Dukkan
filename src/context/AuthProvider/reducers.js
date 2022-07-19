/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
        const {user} = action.payload;
        user ?
        AsyncStorage.setItem('@USER',JSON.stringify(user))
        :
        AsyncStorage.removeItem('@USER');


      return {...state,user};

    default:
      return state;
  }
}
