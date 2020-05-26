import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './Home';
import Areana from './Arena';
import Leaderboard from './LeaderBoard';
import Rules from './Rules';
 
import Hunts from './HometabScreens/Hunts'
import JoinedHunts from './HometabScreens/JoinedHunts'
import CreatedHunts from './HometabScreens/CreatedHunt'
import  Profile from './HometabScreens/Profile'
const Tab = createMaterialBottomTabNavigator();
export class HomeTabs extends Component {
  render() {
    return (
      <Tab.Navigator
        activeColor="white"
        inactiveColor="#b9e4c9"
        barStyle={{backgroundColor: '#37966f'}}
        initialRouteName="Arena">
        <Tab.Screen
          name="Hunts"
          component={Hunts}
          options={{
            tabBarLabel: 'Hunts',
            tabBarIcon: ({color}) => (
              <Icon name="th-large" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Joined_hunts"
          component={JoinedHunts}
          options={{
            tabBarLabel: 'Joined Hunts',
            scrollEnabled: true,
            tabBarIcon: ({color}) => (
              <Icon name="star" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="CreatedHunts"
          component={CreatedHunts}
          options={{
            tabBarLabel: 'Created Hunts',
            tabBarIcon: ({color}) => (
              <Icon name="puzzle-piece" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={26} />
            ),
          }}
        />
        
        {/* <Tab.Screen
          name="Rules"
          component={Rules}
          options={{
            tabBarLabel: 'Rules',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
        }} /> */}
      </Tab.Navigator>
    )
  }
}

export default HomeTabs;
