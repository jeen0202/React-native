import { connect } from 'react-redux';
import { didTask,deleteTask} from '../store/taskActions'
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos) => {
    return todos;
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos)        
    }
}
const mapDispatchToProps = (dispatch) => ({
    toggle : (id) => dispatch(didTask(id)),
    remove : (id) => dispatch(deleteTask(id)),
    
})

const TodoLists = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoLists;
