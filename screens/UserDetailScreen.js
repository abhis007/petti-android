import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import UserDetails from '../components/UserDetails'

const {width,height} = Dimensions.get('window');

export default class UserDetailScreen extends Component {
    
    render() {
        const {navigation,route}=this.props;
        const { uuid} = route.params;
        console.log('User Details Screen is '+uuid);
        return(
            <UserDetails />
        )
    }
}

//uuid={this.props.navigation.state.uuid}