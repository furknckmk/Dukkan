import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './components/Loading';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductPage"
            component={Products}
            options={{
              title: 'Dükkan',
              headerStyle: {backgroundColor: '#00a4ef'},
              headerTitleAlign: 'center',
              headerTitleStyle: {color: 'white'},
              headerRight: () => (
                <Icon
                  name="logout"
                  size={38}
                  color="white"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />

          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Ürün Detay',
              headerStyle: {backgroundColor: '#00a4ef'},
              headerTitleAlign: 'center',
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
