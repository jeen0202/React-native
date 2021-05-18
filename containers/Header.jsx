import Header from '../components/Header'
import {connect} from 'react-redux'
//const dispatch = useDispatch();

const mapDispatchToProps = (dispatch) => ({
    handleModal : handleModal
},dispatch)


const Headers = connect(null,mapDispatchToProps)(Header);

export default Headers
// export default connect(null,function(dispatch){
//     return{
//         show:() => {
//             dispatch({})
//         }
//     }
// })(Header);