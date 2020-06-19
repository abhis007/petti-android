import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import UserDetailScreen from '../screens/UserDetailScreen';
import Arena from '../screens/Arena';

const {width,height} = Dimensions.get('window');

export default class UserRow extends Component {

    render() {

        let uuid = this.props.item.uuid;
        let name = this.props.item.name;
        console.log('UserRow UUID is '+uuid);
        return(
            <View style={{padding: 15, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                borderBottomWidth: 1}}>
                <View style={{flex: 1}}>
                    <Text>{uuid}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text>{name}</Text>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={{borderRadius:20 ,alignItems: "center",
                                    backgroundColor: "#009688"}}
                                    onPress={() => {this.props.navigation.navigate(UserDetailScreen, 
                                                {uuid: {uuid}})
                                                }}>
                        <Text style={{color:'#ffffff'}}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

