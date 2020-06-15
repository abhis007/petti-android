import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';

export default class UserHeaderRow extends Component {
    
    render() {
        return(
            <View style={{padding: 15, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                        borderBottomWidth: 2}}>
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