import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";

const Project= createStackNavigator({
    AdminPanel: {screen: AdminPanel},
    AnswerLog: {screen: AnswerLog},
    Arena: {screen: Arena},
    Home: {screen: Home},
    LeaderBoard: {screen: LeaderBoard},
    Profile: {screen: Profile},
    Rules: {screen: Rules},
    Statistics: {screen: Statistics},
    Tabs: {screen: Tabs},
    UserDetailScreen: {screen: UserDetailScreen},
    Users: {screen: Users},
});
export default createAppContainer(Project);