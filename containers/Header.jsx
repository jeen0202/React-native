import Header from '../components/Header'
import { handleModal} from '../store/taskActions'
import {connect} from 'react-redux'
//const dispatch = useDispatch();

const mapDispatchToProps = (dispatch) => ({
   handlemodal : () => dispatch(handleModal)
})
    
export default connect(undefined,mapDispatchToProps)(Header);

// export default connect(null,function(dispatch){
//     return{
//         show:() => {
//             dispatch({})
//         }
//     }
// })(Header);