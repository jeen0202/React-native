import React, { useState }from 'react';
import {StyleSheet,FlatList,SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

//redux를 사용하기 위한 component import
import { createStore } from 'redux'
import { Provider, connect} from 'react-redux'
import taskReducer from './store/taskReducer';

export default class App extends React.Component{
  //App 실행시 정보 호출  
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state != null){
        this.setState(JSON.parse(state));
      }
    });

  }

  // state = {
  //   todos :[
  //     {        
  //       title : "주간회의",
  //       done : true,
  //     },
  //     {
  //       title : "메일확인",
  //       done : false,
  //     },
  //   ],
  //   showModal : false
  // }
  saveItem =() => {
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state))
  }
  render(){
    //console.log(this.state);    
    const store = createStore(taskReducer);
    //console.log(store.getState());
    return (      
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <Provider store = {store}>
        <SafeAreaView style={styles.container}>
          <Header
            // show={() => {
            //   this.setState({ showModal: true},this.saveItem)}}
               />    
          <FlatList
            data = {store.getState().todos}
            renderItem={({item,index}) => {
            return(
              <TodoItem 
              id = {item.id}         
              title = {item.task} 
              done = {item.done}
              remove={()=>{
                this.setState({
                  todos : store.getState().todos.filter((_,i)=> i !== index)
                })
              }}
              toggle={()=>{
                const newTodos = [...this.state.todos]
                newTodos[index].done = !newTodos[index].done
                this.setState({ todos:newTodos},this.saveItem)
              }}
              // keyExtractor={(_, index) => {
              //   return '${index}'
              //   }}
              />
            )
          }}
        keyExtractor={(item,index) => index.toString()}
          />
          <TaskModal isVisible={store.getState().showModal}
            add={(title)=> {
              this.setState({
                todos : this.state.todos.concat({
                  title:title,
                  done: false,
                }),
                showModal : false,
              },this.saveItem)
            }}
            hide = {() => {
              this.setState({ showModal : false},this.saveItem)
            }} />   
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
