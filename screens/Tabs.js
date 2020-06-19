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
import Profile from './Profile';
import AdminPanel from './AdminPanel';

const Tab = createMaterialBottomTabNavigator();
export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        activeColor="white"
        inactiveColor="#b9e4c9"
        barStyle={{backgroundColor: '#37966f'}}
        initialRouteName="Arena">
        <Tab.Screen
          name="Rules"
          component={Rules}
          options={{
            tabBarLabel: 'Rules',
            tabBarIcon: ({color}) => (
              <Icon name="question" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Arena"
          component={Areana}
          options={{
            tabBarLabel: 'Arena',
            scrollEnabled: true,
            tabBarIcon: ({color}) => (
              <Icon name="book" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarIcon: ({color}) => (
              <Icon name="list-ol" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AdminPanel"
          component={AdminPanel}
          options={{
            tabBarLabel: 'Admin Panel',
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

export default Tabs;
