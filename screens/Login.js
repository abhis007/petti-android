import React, { Component } from 'react';
import { Text, View, Image,Dimensions ,Alert } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
const {width,height} = Dimensions.get('window')
import { StatusBar } from 'react-native'
import { AsyncStorage } from 'react-native';


export default class componentName extends Component {
    createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    _setLoginState =async(token)=>{
      await AsyncStorage.setItem('auth_token',token)
      console.log(token)
    }
  render() {
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
                   this._setLoginState(data.accessToken.toString())
                    console.log(data.accessToken.toString())
                    console.log(data)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>

        </View>
    );
  }
}
