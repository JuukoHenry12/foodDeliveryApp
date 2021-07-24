import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/HomeScreen/SearchScreen';
import MyAccount from '../screens/HomeScreen/MyAccount';
import MyOrder from '../screens/HomeScreen/MyOrder';
import {Icon} from 'react-native-elements';
import {colors} from '../../global/styles';
const ClientTab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <ClientTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}>
      <ClientTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'MyAccount',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="supervisor-account"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ClientTab.Navigator>
  );
};

export default ClientTabs;
