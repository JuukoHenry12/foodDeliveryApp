import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameter} from '../../global/styles';
import {Icon} from 'react-native-elements';
const Header = ({title,type,navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft:20 }}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={
            ()=>{
              navigation.goBack()
            }
          }
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
  },
  headerText:{
    fontSize:20,
    color:colors.headerText,
    fontWeight:"bold",
    marginLeft:20,
  }
});
