
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet,Text, View ,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

import Tabs from './screens/Tabs';
import Home from './screens/Home';
import AdminPanel from './screens/AdminPanel';
import AnswerLog from './screens/AnswerLog';
import Arena from './screens/Arena';
import LeaderBoard from './screens/LeaderBoard';
import Profile from './screens/Profile';
import Rules from './screens/Rules';
import Statistics from './screens/Statistics';
import UserDetailScreen from './screens/UserDetailScreen';
import Users from './screens/Users';

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
      {/* <Stack.Screen name="Lost" component={Tabs} /> */}
      <Stack.Screen name="Home" component={Users} />
      <Stack.Screen name="AdminPanel" component={AdminPanel} />
      <Stack.Screen name="AnswerLog" component={AnswerLog} />
      <Stack.Screen name="Arena" component={Arena} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/>
      {/* <Stack.Screen name="Users" component={Users} /> */}
    </Stack.Navigator>
     
    
    
    </NavigationContainer>
    </SafeAreaView>
  );
}
