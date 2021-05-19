import React from 'react'
import TodoItem from './TodoItem';
import {FlatList} from 'react-native'

const TodoList = ({todos,toggle}) => (
    <FlatList
            data = {todos}                       
            renderItem={({item,index}) => {
            return(              
              <TodoItem 
              key = {item.id}        
              title = {item.task} 
              done = {item.done}              
              remove={()=>{
                this.setState({
                  todos : store.getState().todos.filter((_,i)=> i !== index)
                })
              }}
              toggle={() => {toggle(item.id)}
                // const newTodos = [...this.state.todos]
                // newTodos[index].done = !newTodos[index].done
                // this.setState({ todos:newTodos},this.saveItem)
              }
              />
            )
          }}
        keyExtractor={(item,index) => index.toString()}
          />
);

export default TodoList;