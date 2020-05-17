import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './Home'
import Areana from './Areana'
import Leaderboard from './Leaderboard'
import Rules from './Rules'
import Profile from './Profile'
 
const Tab = createMaterialBottomTabNavigator();
export class Save extends Component {
    render() {
        return (
   
              
   
      <Tab.Navigator
        activeColor="#f0edf6"
  inactiveColor="#b71c1c"
  barStyle={{ backgroundColor: '#F44336' }}
  initialRouteName="Home"
      >
        <Tab.Screen name="Notifications" component={Notifications} 
        options={{
          tabBarLabel: 'Notifications',
          scrollEnabled:true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Search" component={Search} 
          options={{
          tabBarLabel: 'search',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Home" component={Home} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}

        />
        <Tab.Screen name="Coupons" component={Coupons} 
          options={{
          tabBarLabel: 'My Coupons',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-offer" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Inbox" component={Inbox} 
          options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>

   
           
        )
    }
}

export default Save
