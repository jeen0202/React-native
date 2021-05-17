import React from 'react';
import {StyleSheet,FlatList,SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component{
  //App 실행시 정보 호출  
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state != null){
        this.setState(JSON.parse(state));
      }
    });
    // if(value!==null){
    //   value.then((e)=>{
    //     this.setState({
    //       title: e.title,
    //       done : e.done
    //     })
    //   })       
      
    // }  
  }
  state = {
    todos :[
      {        
        title : "주간회의",
        done : true,
      },
      {
        title : "메일확인",
        done : false,
      },
    ],
    showModal : false
  }
  saveItem =() => {
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state))
  }
  render(){
    console.log(this.state); 
    return (      
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true},this.saveItem)
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
        <TaskModal isVisible={this.state.showModal}
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
