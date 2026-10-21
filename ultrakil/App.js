import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Arsenal from './screens/arsenal/Arsenal';
import Inferno from './screens/inferno/Inferno';

const Stack = createNativeStackNavigator();
export default function App() {
  return <NavigationContainer><Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false, contentStyle:{backgroundColor:'#101014'}}}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Arsenal" component={Arsenal}/>
    <Stack.Screen name="Inferno" component={Inferno}/>
  </Stack.Navigator></NavigationContainer>;
}
