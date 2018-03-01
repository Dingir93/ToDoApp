/*
*TaskScreen
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../Components/TasksHeader';
import TaskList from './../Components/TaskList';

export default class TasksScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title:'Comprar leche', completed: false },
        { id: 2, title:'Sacar la basura', completed: false },
        { id: 3, title:'Lavar los platos', completed: true },
        { id: 4, title:'Hacer una peda', completed: false },
        { id: 5, title:'Quitarme la cruda', completed: false },
        {id: 6, title: 'Netflix and chill', completed: false},
        {id: 7, title: 'Pistear de nuevo', completed: false},
        {id: 8, title: '420', completed: true}
      ]
    }
  }
  addTask(){

  }

  updateTask(targetedId){
    //Copiar el estado
    let currentTasks = [...this.state.tasks];

    //Verificar id que se quiere cambiar
    let taskToBeUpdated = currentTasks.find(task=> task.id == targetedId);
    console.log(targetedId);
    console.log(taskToBeUpdated);
    //Checar en que estado esta y cambiarlo
    taskToBeUpdated.completed = !taskToBeUpdated.completed;
    //Actualizar el estado
    this.setState({tasks : currentTasks});

  }

  calculateTaskToBeCompleted(){
    //Retorne el numero de tareas que no estan completas
    let count 0;
    this.state.tasks.forEach( task => { task => {
      if(!task.completed){
        count++;
      }
    }
  } );
  return count;
  }

  renderTasks(){
    return(
      this.state.tasks.map((task)=>{
        return(
          <Task key=(task.id) task=(task) updateTask={this.updateTask.bind.(this)}/>
        )
      })
    )
  }

  render(){
    return (
      <View style={ styles.container }>
        <TasksHeader toBeCompleted={this.calculateTaskToBeCompleted()} />
        //<View style={ styles.tasksContainer }>
          //<TaskList tasks={this.renderTasks}/>
        //</View>
        <ScrollView style={styles.tasksContainer}>{this.renderTasks()}</ScrollView>
          <TouchableHighlight style={styles.addTaskButton}>
            <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')} />
          </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  addTaskButton: {
    backgroundColor: '#ED184A',
    width: 66,
    height: 66,
    borderRadius: 33,
    position: 'absolute',
    bottom: 20,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusIcon:{
    width: 30,
    height: 30
  }
});
