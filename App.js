import React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header'

export default class App extends React.Component{
  render(){
    return (
      //SafeAreaView : 앱화면에서 안전하게 노출되는 지역설정
      <SafeAreaView style={styles.container}>
        <Header />        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
