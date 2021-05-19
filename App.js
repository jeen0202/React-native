import React from 'react';
import {StyleSheet,FlatList,SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './containers/Header'
import TodoLists from './containers/TodoLists'
import TaskModal from './containers/TaskModal'

//redux를 사용하기 위한 component import
import store from './store/store'
// import { createStore } from 'redux'
// import taskReducer from './store/taskReducer';
import { Provider, connect} from 'react-redux'


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
    // const store = createStore(taskReducer);    
    store.subscribe(() => 
    console.log(store.getState())
)    
    return (      
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <Provider store = {store}>
        <SafeAreaView style={styles.container}>
          <Header/>    
          <TodoLists/>
          <TaskModal/>   
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
