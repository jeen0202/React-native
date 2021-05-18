import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos) => {
    return todos;
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)
    }
}

const TodoLists = connect(mapStateToProps)(TodoList);

export default TodoLists;