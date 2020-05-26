
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import { AsyncStorage } from 'react-native';
import HomeTabs from './screens/HomeTabs'
import Login from './screens/Login'
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const  AuthStackScreen=()=>{
 return <AuthStack.Navigator screenOptions={{
  headerShown: false
}}>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
}

const HomeStackScreens =()=>{
    return <HomeStack.Navigator    screenOptions={{
      
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#37966f',elevation :0},
        }}>
        <HomeStack.Screen name="Home" component={HomeTabs} />
     </HomeStack.Navigator>
}


const isLogined =1;

function App() {
  return (
    <NavigationContainer>
       {(isLogined)?<HomeStackScreens/>:<AuthStackScreen/>}
    </NavigationContainer>
  )
}

export default App
