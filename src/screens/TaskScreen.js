import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
export default class TaskScreen extends Component{
  render(){
    return (
    <View styles={styles.container}>
     <Text>Task Screen Container </Text>
      <View style={styles.headerContainer}>
      <Image style={styles.userAvatar} source={require('./../image/user-avatar.png')}>
      <Text style={styles.pendingTaskText}>6 Pendientes </Text>
      <Text style={styles.dateText}>SABADO 27 ENERO </Text>
     </View>

     <View style={styles.taskContainer}>
      <Image style={styles.taskIcon} source ={require('./../images/icon-circle.png')}/>
      <Text style={styles.taskText}>Ajustar Estilos</Text>
     </View>

     <View style={styles.taskContainer}>
      <Image style={styles.taskIcon} source ={require('./../images/icon-circle.png')}/>
      <Text style={styles.taskText}>Ajustar Estilos</Text>
     </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  headerContainer: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar:{
    width: 130,
    height: 130,
    borderRadius: 65
  },
  pendingTaskText: {
    fontSize: 36,
    color: white,
    marginTop: 25
  },
  dateText{
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 8
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'blue'
  }

});
