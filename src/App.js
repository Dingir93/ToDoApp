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

import TaskScreen from './modals/AddTaskModal';



//Screens
const MainScreens = StackNavigator(
  {
  Home: {screen: IntroScreen},
  Task: {screen: TaskScreen}
  },
  {
    headerMode = 'none'
  }

  export default App = StackNavigator(
    {
    MainStack:{screen: MainScreens  },
    AddTaskModal:{screen: AddTaskModal }
    },
    {
      headerMode = 'none'
    }

);

//export default class App extends {
  //render(){
    //return <ScreenStack/>;

  //}
//}
