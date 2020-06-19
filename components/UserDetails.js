import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';

export default class UserDetails extends Component {
    
    render() {
        //console.log('UUID is'+this.props.uuid);
        return(
            <View style={{flex: 1,padding: 15, flexDirection: 'column', borderBottomColor: "rgba(92,94,94,0.5)", 
                        borderBottomWidth: 1}}>
                <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold' }}>{this.props.uuid}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold' }}>UUID</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold' }}>Name</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{ fontWeight: 'bold' }}>Details</Text>
                </View>
            </View>
        )
    }
}