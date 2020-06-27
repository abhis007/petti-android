import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducers';
import AsyncStorage from '@react-native-community/async-storage';
import {URLS_AUTH} from '../apiurls/Urls';
import { enableScreens } from 'react-native-screens';
import { LoginManager } from 'react-native-fbsdk'
import Share from "react-native-share"
//Initial State

const initialState = {
  authToken: null,
  refreshToken: null,
  fbToken: null,
  isSignedIn: false,
  isLoading: false,
  blnReloadList:false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [authState, dispatch] = useReducer(AppReducer, initialState);

  loginFb = async (fbToken) => {
    alert('here');


    dispatch({
      type: 'LOADING',
    });
 const postData={

  access_token:fbToken
 }
    alert(URLS_AUTH.login)
    await fetch(URLS_AUTH.login , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(postData)
    })
      .then((resp) => resp.json())
      .then(async function (data) {
        console.log(data)
        await AsyncStorage.setItem('authToken', data.token);
        await AsyncStorage.setItem('refreshToken', data.token);
        await AsyncStorage.setItem('fbToken', fbToken);
        await AsyncStorage.setItem('user', data.name);
        let tempStateData = {
          authToken: data.token,
          refreshToken: data.token,
          fbToken: fbToken,
        };
  dispatch({
          type: 'SIGN_IN',
          payload: tempStateData,
        });
      })
      .catch((error) => {
        console.log('found error', error);
      });
  };

  restoreToken = async () => {
    dispatch({
      type: 'LOADING',
    });
 
    refreshToken = await AsyncStorage.getItem('refreshToken');
    authToken = await AsyncStorage.getItem('authToken');
    fbToken = await AsyncStorage.getItem('fbToken');

    
    if(!authToken){
      logout();
    }
    else{
    
    let tempStateData = {
      authToken: authToken,
      refreshToken: refreshToken,
      fbToken: fbToken,
    };
    dispatch({
      type: 'SIGN_IN',
      payload: tempStateData,
    });
  }
  };

  enableLoader=async()=>{
    dispatch({
      type: 'LOADING',
    });
  }

  disableLoader=()=>{
    dispatch({
      type: 'LOADING_END',
    });
  }
  logout = async () => {
    LoginManager.logOut()
    AsyncStorage.clear();
    dispatch({
      type: 'SIGN_OUT',
    });

 

  };
  setListReload=(blnSate)=>{
    if(blnSate)
      dispatch({
        type:'ENABLE_LIST_RELOAD',
      })
      else
      dispatch({
        type:'DISABLE_LIST_RELOAD',
      })

  }

  share=async (arrQuestionDetails) => {

    const user = await AsyncStorage.getItem('user');
    const title=user
  
    const url='https://petti-web.herokuapp.com/Respond/'+arrQuestionDetails._id
    const message ="PETTI QUESTION \n\n"+user +" wish to have your anonymus opinion on :\n"+arrQuestionDetails.question+"\n\nTo Share your opinion visit the link :\n"
    const options={
      title:title,
      subject:'Whats you like most in me',
      message: `${message} ${url}`,
    }
    Share.open(options)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });

  }


  return (
    <GlobalContext.Provider
      value={{
        authState,
        loginFb,
        enableLoader,
        disableLoader,
        restoreToken,
        logout,
        share,
        setListReload,
        reLoadList:authState.blnReloadList,
        isSignedIn: authState.isSignedIn,
        isLoading: authState.isLoading,
        authToken:authState.authToken
      }}>
    
      {children}
    </GlobalContext.Provider>
  );
};
