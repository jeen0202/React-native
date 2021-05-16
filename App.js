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
          renderItem={({item,index}) => {
          return(
            <TodoItem          
            title = {item.title} 
            done = {item.done}
            remove={()=>{
              this.setState({
                todos : this.state.todos.filter((_,i)=> i !== index)
              })
            }}
            toggle={()=>{
              const newTodos = [...this.state.todos]
              newTodos[index].done = !newTodos[index].done
              this.setState({ todos:newTodos})
            }}
            // keyExtractor={(_, index) => {
            //   return '${index}'
            //   }}
            />
          )
        }}
        />
        <TaskModal isVisible={this.state.showModal}
          add={(title)=> {
            this.setState({
              todos : this.state.todos.concat({
                title:title,
                done: false,
              }),
              showModal : false,
            })
          }}
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
