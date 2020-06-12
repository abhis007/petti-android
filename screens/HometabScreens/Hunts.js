import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Text,
  TabHeading,
  Body,
  Title,
} from 'native-base';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Featured from '../HuntTabScreens/Featured';
import Search from '../HuntTabScreens/Search';
import Trending from '../HuntTabScreens/Trending';

export default Hunts = ({navigation}) => {
  return (
    <Container>
      <Tabs
        tabBarUnderlineStyle={{height: 5}}
        tabContainerStyle={{elevation: 0, borderColor: 'red'}}
        style={{borderBottomWidth: 0, borderColor: 'red'}}>
        <Tab
          heading="Featured"
          headerStyle={{borderBottomWidth: 0}}
          tabStyle={{backgroundColor: '#43a07a'}}
          style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}
          textStyle={{color: '#6fd8b1'}}
          activeTabStyle={{backgroundColor: '#43a07a'}}
          activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
          <Featured />
        </Tab>
        <Tab
          heading="Trending"
          tabStyle={{backgroundColor: '#43a07a', borderBottomWidth: 0}}
          textStyle={{color: '#6fd8b1'}}
          activeTabStyle={{backgroundColor: '#43a07a'}}
          activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
          style={{borderBottomWidth: 0}}>
          <Trending />
        </Tab>
        <Tab
          heading="Search"
          tabStyle={{backgroundColor: '#43a07a', borderBottomWidth: 0}}
          textStyle={{color: '#6fd8b1'}}
          activeTabStyle={{backgroundColor: '#43a07a'}}
          activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
          <Search />
        </Tab>
      </Tabs>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>{navigation.navigate('CreateHunt')}}
        style={styles.TouchableOpacityStyle}>
        
        <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </Container>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
