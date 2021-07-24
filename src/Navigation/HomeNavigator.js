import * as React from 'react';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack';
//import HomeScreen from '../screens/HomeScreen/HomeScreen';
import  ResturantMapScreen  from '../screens/HomeScreen/ResturantMapScreen';
import  DrawerNavigator from './DrawerNavigator'
//import ClientTabs from './ClientTabs';
const HomeStack = createStackNavigator();

const HomeNavigator =()=> {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
        <HomeStack.Screen name="ResturantMapScreen" component={ResturantMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
