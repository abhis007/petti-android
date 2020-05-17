import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';



import Home from './Home';
import Areana from './Arena';
import Leaderboard from './LeaderBoard';
import Rules from './Rules';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();
export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#b71c1c"
        barStyle={{backgroundColor: '#F44336'}}
        initialRouteName="Home">
        <Tab.Screen
          name="Arena"
          component={Areana}
          options={{
            tabBarLabel: 'Arena',
            scrollEnabled: true,
            tabBarIcon: ({color}) => (
              <MaterialIcons name="notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarLabel: 'Leaderboard',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Rules"
          component={Rules}
          options={{
            tabBarLabel: 'Rules',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
        }} />
      </Tab.Navigator>
    )
  }
}

export default Tabs;
