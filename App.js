import 'react-native-gesture-handler';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import MessageResponse from './screens/MessageResponse';
import CreateQuestion from './screens/CreateQuestion';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';

import PettiHome from './screens/PettiHome';
import Login from './screens/Login';
import {GlobalContext, GlobalProvider} from './context/GlobalState';
import Spinner from 'react-native-loading-spinner-overlay';
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
import { NotifierWrapper } from 'react-native-notifier';
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false
    }}>
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
        backgroundColor: '#ef5350',
        
      },
    }}>
 
    <HomeStack.Screen
      name="Home"
      component={PettiHome}
       captions='Petti'
       
      options={{
        title: 'Petti' ,
        headerTitleStyle: { 
        
        fontWeight: 'bold',
         
    },
        // headerRight: () => (
        //   <Button
        //     bordered
        //     rounded
        //     small
            
        //     style={{marginRight: 10}}
        //     onPress={() => {
        //       logout();
        //     }}>
        //     <Text>logout</Text>
        //   </Button>
          
          
        // // ), 
        // headerLeft: () => (
      
        //       />
          
          
        // ),
      }}
    />
    
        <HomeStack.Screen name="MessageResponse" component={MessageResponse} options={{ title: 'Response' }}/>
        <HomeStack.Screen name="CreateQuestion" component={CreateQuestion} options={{ title: 'Create' }}/>
 
    </HomeStack.Navigator>
  );
};
//comment
function App() {
  const {authState, isSignedIn, restoreToken} = useContext(GlobalContext);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      console.log('is Signedin :', isSignedIn);

      try { 
        refreshToken = await AsyncStorage.getItem('authToken');

        if (refreshToken) {
          restoreToken();
        } 
      } catch (e) {
        console.log(e);
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <NotifierWrapper>
     <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#ef5350" translucent = {true}/>
        <NavigationContainer>
          {isSignedIn ? <HomeStackScreens /> : <AuthStackScreen />}
        </NavigationContainer>
    </NotifierWrapper>
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
