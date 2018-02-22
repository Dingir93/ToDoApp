/**
* IntroScreen
*
**/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-native-navigation';
import IntroScreen from './screens/introscreen';
import TaskScreen from './screens/TaskScreen';



//Screens
const ScreenStack = StackNavigator(
  {
  Home: {screen: IntroScreen},
  Task: {screen: TaskScreen}
  },
  {
    headerMode = 'none'
  }

);

export default class App extends {
  render(){
    return <ScreenStack/>;

  }
}
