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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TryPremium from './screens/tryPremium/tryPremium';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='Signin' component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name='Premium' component={TryPremium} options={{ headerShown: false }} />

        </Stack.Navigator>

      </NavigationContainer>

    </SafeAreaView>
  );
}



export default App;
