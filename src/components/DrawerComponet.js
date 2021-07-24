import React from 'react';
import {
  Text,
  View,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Avatar,
  Button,
  Icon
   } from 'react-native-elements'

import {
  DrawerItem,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import {colors } from '../../global/styles'

const DrawerComponet= (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.buttons,
            }}>
             <Avatar 
                rounded
                avatarStyle ={styles.avatar}
                size = {75}
                source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"}}
            />
             
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                Juuko Henry
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 14,
                }}>
                juukohenry23@gmail.com
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 14,
                  }}>
                  My Favourite
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                0
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 14,
                }}>
                Shopping Cart
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material"
              name="payment"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Driver Console"
          icon={({color, size}) => (
            <Icon
              type="material"
              name="motorcycle"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="Ionicons"
              name="settings"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{marginTop: 10}}>
          <Text style={styles.preference}>Preference</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#7677577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
       onPress={()=>{
         navigation.navigate('SignInWelcome')
       }}
      >
      <DrawerItem
        label="Sign Out"
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
           
          />
        )}
      />
      </TouchableOpacity>
    </View>
  );
};
export default DrawerComponet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.pageBackground,
  },
  preference: {
    fontSize: 10,
    color: colors.grey1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  switchText: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 20,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
