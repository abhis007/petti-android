import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducers';
import AsyncStorage from '@react-native-community/async-storage';
import {URLS_AUTH} from '../apiurls/Urls';
import { enableScreens } from 'react-native-screens';

//Initial State

const initialState = {
  authToken: null,
  refreshToken: null,
  fbToken: null,
  isSignedIn: false,
  isLoading: false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [authState, dispatch] = useReducer(AppReducer, initialState);

  loginFb = async (fbToken) => {
    alert(fbToken);
    dispatch({
      type: 'LOADING',
    });
    alert(URLS_AUTH.login)
    
    await fetch(URLS_AUTH.login + fbToken, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(async function (data) {
        await AsyncStorage.setItem('authToken', data.token);
        await AsyncStorage.setItem('refreshToken', data.refreshToken);
        await AsyncStorage.setItem('fbToken', fbToken);
        let tempStateData = {
          authToken: data.token,
          refreshToken: data.refreshToken,
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
 
console.log('sssssssssssssss'+authToken);
    if(!authToken){
     
      dispatch({
        type: 'SIGN_OUT',
      });
    }
    else{
      alert('asdasdasadasdasd')
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
    alert('asdsd')
    AsyncStorage.clear();
    dispatch({
      type: 'SIGN_OUT',
    });

  };

  return (
    <GlobalContext.Provider
      value={{
        authState,
        loginFb,
        enableLoader,
        disableLoader,
        restoreToken,
        logout,
        isSignedIn: authState.isSignedIn,
        isLoading: authState.isLoading,
        authToken:authState.authToken
      }}>
     
      {children}
    </GlobalContext.Provider>
  );
};
