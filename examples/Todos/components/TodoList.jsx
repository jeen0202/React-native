import React from 'react'
import TodoItem from './TodoItem';
import {FlatList} from 'react-native'

const TodoList = ({todos,toggle,remove}) => (
    <FlatList
            data = {todos}                       
            renderItem={({item,index}) => {
            return(              
              <TodoItem 
              key = {item.id}        
              title = {item.task} 
              done = {item.done}              
              remove={()=>remove(item.id)}
              toggle={() => toggle(item.id)}
              />
            )
          }}
        keyExtractor={(item,index) => index.toString()}
          />
);

export default TodoList;