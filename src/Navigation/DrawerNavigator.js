import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {colors} from '../../global/styles';
import BusinessConsole from '../screens/HomeScreen/BusinessConsole';
import DrawerComponet from '../components/DrawerComponet';
const DrawerTab = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <DrawerTab.Navigator
     drawerContent={
       props=><DrawerComponet {...props}/>

     }
    >
      <DrawerTab.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material-community"
              color={focused ? '#7cc' : colors.cardbackground}
              size={size}
            />
          ),
        }}
      />

      <DrawerTab.Screen
        name="BusinessConsole"
        component={BusinessConsole}
        options={{
          title: 'Business Console',
          drawerIcon: (focused, size) => (
            <Icon
              name="business"
              type="material"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </DrawerTab.Navigator>
  );
};


