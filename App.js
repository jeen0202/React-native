import React, { useState }from 'react';
import {StyleSheet,FlatList,SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header'
import TodoLists from './containers/TodoLists'
import TaskModal from './components/TaskModal'

//redux를 사용하기 위한 component import
import { createStore } from 'redux'
import { Provider, connect} from 'react-redux'
import taskReducer from './store/taskReducer';

export default class App extends React.Component{
  //App 실행시 정보 호출  
  componentDidMount() {
    // AsyncStorage.getItem('@todo:state').then((state)=>{
    //   if(state != null){
    //     this.setState(JSON.parse(state));
    //   }
    // });

  }
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
          <TodoLists/>
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
