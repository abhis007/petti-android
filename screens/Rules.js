
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet,Text, View ,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

import Tabs from './screens/Tabs'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();export default function App() {
    return (
   
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#E53935" translucent = {true}/>
      <NavigationContainer>
     
      <Stack.Navigator 
       
        screenOptions={{
          
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#F44336' },
        }}>
        <Stack.Screen name="Shopwise" component={Tabs} />
      </Stack.Navigator>
       
      
      
      </NavigationContainer>
      </SafeAreaView>
    );
  }