/**
 * Intro Screen
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  View
} from 'react-native';



export default class IntroScreen extends Component<Props> {
  goTask(){
    this.props.navigation.navigate('Task');
  }
  render() {
    return (
      <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('./../images/remindMe-logo.png')} />
        <TouchableHighlight
            style={styles.secondaryButton}
            onPress={this.goTask.bind(this)}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image
          source={require('./../images/avatars.png')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(237,24,74)'
  },
  logo: {
    width: 285,
    height: 75,
    marginTop: 140
  },
  secondaryButton: {
    height: 55,
    width: 325,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 27
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});
