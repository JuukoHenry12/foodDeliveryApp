import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, parameter, title} from '../../../global/styles';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import ClientTabs from '../../Navigation/ClientTabs';

const SignScreen = ({navigation}) => {
  const [textInput1focussed, setTextInput1focussed] = useState(false);
  const [textInput2focussed, setTextInput2focussed] = useState(false);
  const textinput1 = useRef(1);
  const textinput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter your email and pasword </Text>
        <Text style={styles.text1}> to sign in </Text>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="email"
          style={styles.textinput1}
          ref={textinput1}
          onFocus={() => {
            setTextInput1focussed(false);
          }}
          onBlur={() => {
            setTextInput1focussed(true);
          }}
        />
      </View>
      <View style={styles.textinput2}>
        <Animatable.View
          animation={textInput2focussed ? '' : 'fadeInLeft'}
          duration={400}>
          <Icon name="lock" size={25} type="material" />
        </Animatable.View>
        <TextInput
          placeholder="Password"
          style={{width: '80%'}}
          ref={textinput2}
          onFocus={() => {
            setTextInput2focussed(false);
          }}
          onBlur={() => {
            setTextInput2focussed(true);
          }}
        />
        <Animatable.View
          animation={textInput2focussed ? '' : 'fadeInLeft'}
          duration={400}>
          <Icon name="visibility-off" type="material" size={25} />
        </Animatable.View>
      </View>
      <View style={{marginHorizontal: 20, marginVerital: 10}}>
        <Button
          title="Sign In"
          buttonStyle={parameter.ButtonStyle}
          titleStyle={parameter.buttonTitle}
          onPress={()=>{
            navigation.navigate('DrawerNavigator')
          }}
        />
      </View>
      <View>
        <Text style={{...styles.forgotpassword}}>Forgot Password</Text>
      </View>
      <View>
        <Text style={styles.text3}>OR</Text>
      </View>
     <View style={{marginHorizontal: 10, marginVerital: 5}}>
        <SocialIcon
          title="Sign In with Facebook"
          button
          type="facebook"
          style={parameter.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginVerital: 5}}>
        <SocialIcon
          title="Sign In with Google"
          button
          type="google"
          style={parameter.socialIcon}
         
        />
      </View>
      <View>
        <Text style={{...styles.text1, marginLeft: 15}}>
          New on xpress food
        </Text>
      </View>

      <View style={{alignItems:'flex-end'}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButtonStyle}
          titleStyle={styles.createbuttonTitle}
        
        />
      </View>
    </View>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey1,
    fontSize: 15,
    fontFamily:'aerial'
  },
  forgotpassword: {
    color: colors.grey1,
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  text3: {
    color: colors.grey1,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textinput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom:5,
    height:40,
    paddingLeft: 15,
  },
  textinput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 5,
    height:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  socialIcon: {
    height: 30,
    borderRadius: 12,
  },
  createButtonStyle: {
    borderColor: '#ff8c52',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
  },
  createbuttonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: -3,
  },
});
