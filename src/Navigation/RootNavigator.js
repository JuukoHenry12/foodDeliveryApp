import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
const  RootNavigator=()=> {
  const isLoggedIn =true
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator/> :<AuthNavigator/> }
    </NavigationContainer>
  );
}

export default RootNavigator;
