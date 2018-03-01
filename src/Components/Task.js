import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class Task extends Component<Props>{


	render(){

    const {title, completed, id}=this.props.task;
    const icon = completed ? require('./../images/icon-checked.png'):require('./../images/icon-circle.png');

		return(
        <TouchableHighlight style={styles.container} onPress={() => this.props.UpdateTask(id) }>
          <View style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={icon}/>
            <Text style={completed ? styles.taskTextCompleted:styles.taskText}>{title}</Text>
          </View>
      </TouchableHighlight>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    height: 60
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  taskIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21,
  },
  taskTextCompleted:{
    fontSize: 21,
    color: '#A4A4A4'
  }

});
