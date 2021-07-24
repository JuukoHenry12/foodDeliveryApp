import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameter} from '../../global/styles';
import {Icon,withBadge} from 'react-native-elements';
const HomeHeader = ({navigation}) => {
  const BadgeIcon =withBadge(0)(Icon)
  return (
    <View style={styles.header}>
      <View>
        <Icon
          type="material-community"
          name="menu"
          size={28}
          color={colors.cardbackground}
           onPress={
             ()=>{
              navigation.toggleDrawer()
             }
           }
        />
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginRight:20,}}>
        <Text style={styles.headerText}>Java House</Text>
      </View>
      <View style={{alignItems:'center',justifyContent:'center',marginRight:20}}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
           
          />
      </View>
     
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    height:parameter.Headerhegiht,
    justifyContent:'space-between'
  },
  headerText: {
    fontSize: 20,
    color: colors.headerText,
    fontWeight: 'bold',
    marginLeft: 20,
  
  },
});
