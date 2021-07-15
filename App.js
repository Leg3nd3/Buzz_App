import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FbScreen from './screens/fb.js';
import InScreen from './screens/in.js';

export default class App extends React.Component {
  render(){
    return(
 <View style={styles.container}>
   <AppContainer />
 </View>
    )
  }
}

const TabNavigator= createBottomNavigator({
  Facebook: FbScreen,
  Instagram: InScreen
});
 
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
