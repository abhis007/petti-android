import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import HomeTabs from './screens/HomeTabs';
import Login from './screens/Login';
import CreateHunt from './screens/CreateHunt';
import {GlobalContext, GlobalProvider} from './context/GlobalState';
import {View} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
import {Container, Header, Content, Button, Icon, Text} from 'native-base';
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{}}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

const HomeStackScreens = () => {
  const {authState, isSignedIn, restoreToken} = useContext(GlobalContext);
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#37966f',
          elevation: 0,
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerRight: () => (
            <Button
              bordered
              rounded
              small
              danger
              style={{marginRight: 10}}
              onPress={() => {
                logout();
              }}>
              <Text>logout</Text>
            </Button>
            
            
          ), headerLeft: () => (
            <Button
              bordered
              rounded
              small
              danger
              style={{marginRight: 10}}
              onPress={() => {
              console.log(authState);
              }}>
              <Text>ST</Text>
            </Button>
            
            
          ),
        }}
      />
      <HomeStack.Screen
        name="CreateHunt"
        component={CreateHunt}
        options={{title: 'Create Hunt'}}
      />
    </HomeStack.Navigator>
  );
};

function App() {
  const {authState, isSignedIn, restoreToken} = useContext(GlobalContext);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      console.log('is Signedin :', isSignedIn);

      try {
        refreshToken = await AsyncStorage.getItem('refreshToken');
        alert(isSignedIn);

        if (refreshToken) {
          restoreToken();
        } else {
          logout();
        }
      } catch (e) {
        console.log('no tocken');
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isSignedIn ? <HomeStackScreens /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

function Loader() {
  const {isLoading} = useContext(GlobalContext);

  return (
    <Spinner
      //visibility of Overlay Loading Spinner
      visible={isLoading}
      overlayColor="rgba(57, 58, 52, 0.56)"
      //Text with the Spinner
      textContent={'Loading...'}
      animation="slide"
      //Text style of the Spinner Text
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
}

export default () => (
  <GlobalProvider>
    <Loader />
    <App />
  </GlobalProvider>
);
