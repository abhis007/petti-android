
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


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
 
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#356859" translucent = {true}/>
    <NavigationContainer>
   
    <Stack.Navigator 
     
      screenOptions={{
        
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#37966f' },
      }}>
      <Stack.Screen name="Lost" component={Tabs} />
    </Stack.Navigator>
     
    
    
    </NavigationContainer>
    </SafeAreaView>
  );
}
