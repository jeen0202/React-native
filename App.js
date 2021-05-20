import React from 'react';
import {StyleSheet,SafeAreaView } from 'react-native'
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"
import Header from './containers/Header'
import TodoLists from './containers/TodoLists'
import TaskModal from './containers/TaskModal'

//redux를 사용하기 위한 component import
import store from './store/store'
import { Provider} from 'react-redux'
//redux persist 사용
const persistor = persistStore(store);
export default class App extends React.Component{
  //App 실행시 정보 호출  

  render(){
    return (
      //Provider : Redux 사용을 위한 Component      
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <Header/>    
            <TodoLists/>
            <TaskModal/>   
          </SafeAreaView>
        </PersistGate>
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
