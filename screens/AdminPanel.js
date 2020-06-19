import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,Button, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Statistics from './Statistics';
import Leaderboard from './LeaderBoard';
import Users from './Users';
import UserDetailPage from './UserDetailScreen';

const {width,height} = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

export default class AdminPanel extends Component {
    
    render() {
        return (
            <Tab.Navigator initialRouteName="Statistics">
                <Tab.Screen name="Statistics" component={Statistics} />
                <Tab.Screen name="Levels" component={UserDetailPage} />
                <Tab.Screen name="Users" component={Users} />
            </Tab.Navigator>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dce1e8',
    }
});