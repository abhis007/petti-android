import React, { Component,useContext } from 'react';
import { Text, View, Image,Dimensions ,Alert,Button } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
const {width,height} = Dimensions.get('window')
import { StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import {GlobalContext} from '../context/GlobalState'
import Spinner from 'react-native-loading-spinner-overlay';
export default Login =({ navigation })=> {

    const {isSignedIn,loginFb}= useContext(GlobalContext)
  
    return (
        <View style={{flex:1,backgroundColor:'#3b4045', alignItems: 'center'}}>
          
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#3b4045" translucent = {true}/>

        <Image
            source={require('../assets/logo.png')}
            style={{width:300,height:200,marginTop:height/3}}
            resizeMode="contain"
        />


        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {   
                  loginFb(data.accessToken.toString())                                                  
                    
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
        </View>
    );

}
