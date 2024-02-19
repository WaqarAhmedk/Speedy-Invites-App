/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import AuthBase from './screens/auth/SignUp';
import SignUp from './screens/auth/SignUp';
import SignIn from './screens/auth/Signin';
function App(): React.JSX.Element {


  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#ffff'}}>
    {/* <SplashScreen /> */}
    <SignUp />

    {/* <SignIn/> */}
   </SafeAreaView>
  );
}



export default App;
