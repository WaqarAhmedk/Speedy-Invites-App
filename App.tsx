/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import AuthBase from './screens/auth/SignUp';
import SignUp from './screens/auth/SignUp';
import SignIn from './screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TryPremium from './screens/tryPremium/tryPremium';
import Home from './screens/home/home';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import Cards from './screens/cards/cards';
import {AppColors} from './constants/constants';
import EditCard from './screens/cards/editCard';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signup"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Signin"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Premium"
              component={TryPremium}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cards"
              component={Cards}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: AppColors.mainBackgroundColor,
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Edit"
              component={EditCard}
              options={{
                title: 'Edit Card',
                headerStyle: {
                  backgroundColor: AppColors.mainBackgroundColor,
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
