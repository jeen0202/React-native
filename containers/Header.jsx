import Header from '../components/Header'
import {connect} from 'react-redux'
import { showModal } from '../store/taskActions'
import { userDispatch,useSelector} from 'react-redux'
const dispatch = useDispatch();

const pressPlus = () => dispatch(showMoadl())

export default connect(null,function(dispatch){
    return{
        show:() => {
            dispatch({})
        }
    }
})(Header);