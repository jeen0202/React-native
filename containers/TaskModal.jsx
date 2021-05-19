import TaskModal from '../components/TaskModal';
import {addTask,hideModal} from '../store/taskActions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isVisible : state.showModal
});

const mapDispatchToProps = (dispatch) => ({
    add : (todos) => dispatch(addTask(todos)),
    hide : () => dispatch(hideModal()),     
    
})

export default connect(mapStateToProps,mapDispatchToProps)(TaskModal);

// isVisible={store.getState().showModal}
//             add={(title)=> {
//               this.setState({
//                 todos : this.state.todos.concat({
//                   title:title,
//                   done: false,
//                 }),
//                 showModal : false,
//               },this.saveItem)
//             }}
//             hide = {() => {
//               this.setState({ showModal : false},this.saveItem)
//             }}