import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, Title,ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ListComponent from '../../components/ListComponent'
import Icon from 'react-native-vector-icons/FontAwesome'
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
export default class JoinedHunts extends Component {
    render() {
        return (
           
             <Container  style={{backgroundColor:'#dce1e8',flex:1}}>
    <Header toolbarDefaultBg='#43a07a' Header='asd' style={{backgroundColor:'#039be5',height:40}} >
        
        <Body>
        <Title style={{fontSize:15,paddingLeft:10,fontWeight:'bold'}}>Created Hunt</Title>
        </Body>
            </Header>
        <Content>
       
      
          <List >
            <ListComponent item={dummyData2} module='Created'/>
          </List>
        </Content>

        
      </Container>
          
        )
    }
}
