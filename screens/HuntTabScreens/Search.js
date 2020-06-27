import React, { Component } from 'react'
import { View ,TextInput,Dimensions} from 'react-native'
import { Container, Header, Content, List, ListItem,Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ListComponent from '../../components/ListComponent'
const {width,height} = Dimensions.get('window')
const dummyData2 =
[
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:31
    },
    {
        title:"Fasion",
        url:'https://i.picsum.photos/id/1059/400/300.jpg',
        description:'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.',
        key:32
    },
    {
        title:"Titlte",
        url:'https://i.picsum.photos/id/23/400/300.jpg',
        description:'adsadasd',
        key:33
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/55/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:312
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/61/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:11
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:112
    },
]
export default class Search extends Component {
    render() {
        return (
            <Container  style={{backgroundColor:'#eeeeee',flex:1}}>
                <View style={{width: width-5, height: 75, padding:15}} >
                    <TextInput  placeholder='Search' style={{backgroundColor: 'white',padding:5,borderRadius:20,textAlign:'center'}}/>
                </View>
            <Content>
           
              <List>
                <ListComponent item={dummyData2}/>
              </List>
            </Content>
    
           
            </Container>
        )
    }
}
