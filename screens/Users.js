import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import SearchBar from 'react-native-search-bar';
import Arena from './Arena';
import UserRow from '../components/UserRow';
import UserHeaderRow from '../components/UserHeaderRow';
import AnswerLog from './AnswerLog';

const {width,height} = Dimensions.get('window');

const placeholder='Enter UUID for any user';

const users = [
    {
        uuid: 1,
        name: 'Alok',
        email: 'alok@mail.com',
        mobile: '1234567890'
    },
    {
        uuid: 2,
        name: 'Abinandh',
        email: 'abinandh@mail.com',
        mobile: '0987654321'
    }
];

searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ data: newData });  
  };

export default class Users extends Component {

    render() {
        // const {navigation,route}=this.props;
        // const { itemId,otherParam } = route.params;
        // console.log('Users file is '+itemId);
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1.5, width: width-5, height: 75, padding:15}} >
                        <TextInput  placeholder={placeholder} style={{backgroundColor: 'white',
                                    padding:5,borderRadius:20,textAlign:'center'}}/>
                    </View>
                    <View style={{flex: 1, width: width-5, height: 75, padding:15}} >
                        <TouchableOpacity style={{borderRadius:20 ,alignItems: "center",
                                        backgroundColor: "#009688", padding:10}}
                                        onPress={() => this.props.navigation.navigate(AnswerLog)}>
                            <Text style={{color:'#ffffff'}}>Get Answer Log</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <UserHeaderRow/>
                    <FlatList
                        data={users}
                        renderItem={({item}) => (
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <UserRow item={item} navigation={navigation}/>
                            </View>
                        )}
                        keyExtractor={item => item.uuid.toString()}
                    />
                    
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
