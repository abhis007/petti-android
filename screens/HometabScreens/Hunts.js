import React, { Component } from 'react'
import { Container, Header, Content, Tab, Tabs,Text,TabHeading, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import Featured from '../HuntTabScreens/Featured'
import Search from '../HuntTabScreens/Search'
import Trending from '../HuntTabScreens/Trending'

export default class Hunts extends Component {
    render() {
        return (
            <Container>
        

        <Tabs tabBarUnderlineStyle={{height:5}} tabContainerStyle={{elevation:0,borderColor:'red'}} style={{borderBottomWidth:0,borderColor:'red'}}   >
        
          <Tab  heading="Featured" headerStyle={{borderBottomWidth:0}}    tabStyle={{backgroundColor: '#43a07a'}}  style={{backgroundColor: '#ffffff',borderBottomWidth:0}}  textStyle={{color: '#6fd8b1'}}  activeTabStyle={{backgroundColor: '#43a07a'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}   >
         <Featured/>
          </Tab>
          <Tab heading="Trending" tabStyle={{backgroundColor: '#43a07a',borderBottomWidth:0}} textStyle={{color: '#6fd8b1'}}  activeTabStyle={{backgroundColor: '#43a07a'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}  style={{borderBottomWidth:0}} >
            <Trending/>
           </Tab>
           <Tab heading="Search" tabStyle={{backgroundColor: '#43a07a',borderBottomWidth:0}} textStyle={{color: '#6fd8b1'}}  activeTabStyle={{backgroundColor: '#43a07a'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Search/>  
           </Tab>
           
           
        </Tabs>
      </Container>
        )
    }
}
