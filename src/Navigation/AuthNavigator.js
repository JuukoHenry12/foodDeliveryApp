import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignScreen from '../screens/authScreen/SignScreen';
import SignInWelcome from '../screens/authScreen/SignInWelcome';
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={SignInWelcome}>
      <AuthStack.Screen
        name="SignWelcome"
        component={SignInWelcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <AuthStack.Screen
        name="SignScreen"
        component={SignScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
     
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
