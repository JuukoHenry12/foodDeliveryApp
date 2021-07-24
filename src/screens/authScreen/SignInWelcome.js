import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, parameter, title} from '../../../global/styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import SignScreen from './SignScreen'
import Swiper from 'react-native-swiper';
const SignInWelcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header1}>Discover Resturant</Text>
        <Text style={styles.header2}>In Your Area</Text>
      </View>
      <View style={styles.swiper}>
        <Swiper autoplay={true}>
          <View style={styles.side1}>
            <Image
               source={require('../../assests/images/image1.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.side2}>
            <Image
            source={require('../../assests/images/image2.jpeg')}
              style={{height: '100%',  width: '100%'}}
            />
          </View>
          <View style={styles.side3}>
            <Image
             source={require('../../assests/images/image3.jpeg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.buttons}>
        <View style={{marginHorizontal: 20, marginTop:20}}>
          <Button
            title="Sign In"
            buttonStyle={parameter.ButtonStyle}
            titleStyle={parameter.buttonTitle}
            onPress={() => {
              navigation.navigate('SignScreen')
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginVerital: 20}}>
          <Button
            title="create account"
            buttonStyle={styles.createButtonStyle}
            titleStyle={styles.createbuttonTitle}
            onPress={() => {
              navigation.navigate('SignScreen')
            }}
          />
        </View>

      </View>
    </View>
  );
};

export default  SignInWelcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingTop: 20,
  },
  header1: {
    fontSize: 26,
    color: colors.buttons,
    fontWeight: 'bold',
    textAlign:'center',
  },
  header2: {
    fontSize: 26,
    color: colors.buttons,
    fontWeight: 'bold',
    textAlign:'center',
  },
  swiper: {
    flex: 4,
    justifyContent: 'center',
  },
  buttons: {
    flex: 4,
    marginTop:20,
  },
  side1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  side2: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  side3: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonStyle: {
    borderColor: '#ff8c52',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
    marginTop:20,
  },
  createbuttonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -3,
  },
});
