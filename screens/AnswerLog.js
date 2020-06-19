import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';

const {width,height} = Dimensions.get('window');

const username = 'Alok';

const answers = [
    {
        id: 1,
        uuid: 1,
        level: 1,
        answer: 'harryp'
    },
    {
        id: 2,
        uuid: 1,
        level: 2,
        answer: 'harrypo'
    },
    {
        id: 3,
        uuid: 1,
        level: 2,
        answer: 'harrypot'
    },
    {
        id: 4,
        uuid: 1,
        level: 1,
        answer: 'harrypott'
    },
    {
        id: 5,
        uuid: 1,
        level: 3,
        answer: 'harrypotte'
    },
    {
        id: 6,
        uuid: 1,
        level: 4,
        answer: 'harrypotter'
    },
    {
        id: 7,
        uuid: 1,
        level: 3,
        answer: 'snape'
    },
    {
        id: 8,
        uuid: 1,
        level: 5,
        answer: 'gryffindor'
    },
    {
        id: 9,
        uuid: 1,
        level: 4,
        answer: 'helga'
    },
    {
        id: 10,
        uuid: 1,
        level: 5,
        answer: 'albus'
    },
    {
        id: 11,
        uuid: 1,
        level: 2,
        answer: 'severus'
    },
    {
        id: 12,
        uuid: 1,
        level: 1,
        answer: 'lockhart'
    },
    {
        id: 13,
        uuid: 1,
        level: 3,
        answer: 'ron'
    },
    {
        id: 14,
        uuid: 1,
        level: 2,
        answer: 'hermione'
    },
    {
        id: 15,
        uuid: 1,
        level: 6,
        answer: 'weasley'
    },
    {
        id: 16,
        uuid: 2,
        level: 1,
        answer: 'scholes'
    },
    {
        id: 17,
        uuid: 2,
        level: 1,
        answer: 'scholesy'
    },
    {
        id: 18,
        uuid: 2,
        level: 3,
        answer: 'lampard'
    },
    {
        id: 19,
        uuid: 2,
        level: 5,
        answer: 'uefa'
    }
    ,
    {
        id: 20,
        uuid: 2,
        level: 1,
        answer: 'fifa'
    },
    {
        id: 21,
        uuid: 2,
        level: 2,
        answer: 'italy'
    },
    {
        id: 22,
        uuid: 2,
        level: 4,
        answer: 'gerrard'
    },
    {
        id: 23,
        uuid: 2,
        level: 4,
        answer: 'zidane'
    },
    {
        id: 24,
        uuid: 2,
        level: 3,
        answer: 'figo'
    },
    {
        id: 25,
        uuid: 2,
        level: 2,
        answer: 'spain'
    },
    {
        id: 26,
        uuid: 2,
        level: 1,
        answer: 'brazil'
    },
    {
        id: 27,
        uuid: 2,
        level: 3,
        answer: 'france'
    }
    ,
    {
        id: 28,
        uuid: 2,
        level: 6,
        answer: 'ronaldinho'
    },
    {
        id: 29,
        uuid: 2,
        level: 5,
        answer: 'kaka'
    }
    ,
    {
        id: 30,
        uuid: 2,
        level: 4,
        answer: 'ronaldo'
    }
];

export default class AnswerLog extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{padding: 15, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{ fontSize: 20 }}>Username</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{username}</Text>
                    </View>
                </View>
                <View style={{padding: 5, flexDirection: 'column'}}>
                    <View style={{padding: 5, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                        borderBottomWidth: 2}}>
                        <View style={{flex: 1}}>
                            <Text style={{ fontWeight: 'bold' }}>Level</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{ fontWeight: 'bold' }}>Answer</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{padding: 5, flexDirection: 'column'}}>
                        <FlatList
                            data={answers}
                            renderItem={({item}) => (
                                    <View style={{padding: 5, flexDirection: 'row', borderBottomColor: "rgba(92,94,94,0.5)", 
                                        borderBottomWidth: 1}}>
                                        <View style={{flex: 1}}>
                                            <Text>{item.level}</Text>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <Text>{item.answer}</Text>
                                        </View>
                                    </View>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dce1e8',
    }
});
