import 'react-native-gesture-handler';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

import Tabs from './screens/Tabs';
import Home from './screens/Home';
import AdminPanel from './screens/AdminPanel';
import AnswerLog from './screens/AnswerLog';
import Arena from './screens/Arena';
import LeaderBoard from './screens/LeaderBoard';
import Profile from './screens/Profile';
import Rules from './screens/Rules';
import Statistics from './screens/Statistics';
import UserDetailScreen from './screens/UserDetailScreen';
import Users from './screens/Users';

const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';
import HomeTabs from './screens/HomeTabs';
import Login from './screens/Login';
import CreateHunt from './screens/CreateHunt'
import {GlobalContext, GlobalProvider} from './context/GlobalState';
import {View} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{}}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#37966f',
          elevation: 0,
        },
      }}>
    
      <HomeStack.Screen name="Home" component={HomeTabs} />
      <HomeStack.Screen name="CreateHunt"  component={CreateHunt}  options={{ title: 'Create Hunt' }}/>
      <HomeStack.Screen name="Users" component={Users} />
      <HomeStack.Screen name="AdminPanel" component={AdminPanel} />
      <HomeStack.Screen name="AnswerLog" component={AnswerLog} />
      <HomeStack.Screen name="Arena" component={Arena} />
      <HomeStack.Screen name="LeaderBoard" component={LeaderBoard} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Rules" component={Rules} />
      <HomeStack.Screen name="Statistics" component={Statistics} />
      <HomeStack.Screen name="UserDetailScreen" component={UserDetailScreen}/>
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
       
        if (refreshToken) {
          restoreToken();
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
