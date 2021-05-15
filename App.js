import React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component{
  render(){
    return (
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <SafeAreaView style={styles.container}>
        <Header />     
        <TodoItem title="React-Native App 만들기" done={true}/>
        <TodoItem title="사업계획서 작성하기" done={false}/>
        <TaskModal isVisible={false} />   
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
