import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {colors} from './global/styles';
import RootNavigator from './src/Navigation/RootNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.statusbar} barStyle="light-content" />

      <RootNavigator />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
