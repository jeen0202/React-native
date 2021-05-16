import React from 'react';
import {StyleSheet,FlatList,SafeAreaView, TouchableHighlightBase } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component{
  state = {
    todos :[
      {        
        title : "주간회의",
        done : true,
      },
      {
        title : "면직처리",
        done : false,
      },
    ],
    showModal : false
  }
  render(){
    return (
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true})
          }} />    
        <FlatList
          data = {this.state.todos}
          renderItem={({item}) => {
          return(
          <TodoItem          
          title = {item.title} 
          done = {item.done}
          keyExtractor={(_, index) => {
            return '${index}'
            }}
          />
          )
        }}
        />
        <TaskModal isVisible={this.state.showModal}
          hide = {() => {
            this.setState({ showModal : false})
          }} />   
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
