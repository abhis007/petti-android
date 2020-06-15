import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,Button, TouchableOpacity } from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Statistics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{padding: 15, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                                borderBottomWidth: 1}}>
                        <View style={{flex: 4}}>
                            <Text>Number Of Active Users</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>100</Text>
                        </View>
                    </View>
                    <View style={{padding: 15, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                                borderBottomWidth: 1}}>
                        <View style={{flex: 4}}>
                            <Text>Number Of Levels</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>20</Text>
                        </View>
                    </View>
                    <View style={{padding: 15, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                                borderBottomWidth: 1}}>
                        <View style={{flex: 4}}>
                            <Text>Highest Level Reached</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>10</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dce1e8',
    }
});