import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Catálogo de Produtos' }}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Produtos' }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre o App' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
