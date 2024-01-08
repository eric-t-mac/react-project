import React from "react";

// v6版本前，withiRouter 是一个高阶组件，v6版本被废弃了，官方推荐Hooks来替换withRouter
// 作用是：让那些没有被Route直接包裹的React组件拥有路由API

// 一、使用Hooks写法，来解决React组件中没有路由API的问题
import { 
    // useNavigate, 
    useLocation, 
    useParams 
} from 'react-router-dom';
const Header = props => {
    const location = useLocation();
    // const navigate = useNavigate();
    const params = useParams();
    console.log('--- header location params', location, params);
    return (
        <div className="re-header">
            Header
        </div>
    )
}

export default Header

// 二、使用withRoute高阶组件来解决React无状态组件中没有路由API的问题
// import { withRouter } from 'react-router-dom';

// export default withRouter(props => {
//     console.log('--- header props', props);
//     return (
//         <div className="re-header">
//             Header
//         </div>
//     )
// })

// 三、使用 withRouter 高阶组件，解决 React 组件中没有路由API的问题
// 有两种写法： 装饰器的写法，或者 ES5函数调用的写法
// @withRouter
// class Header extends React.Component {
//     render() {
//         console.log('---- header props');
//         return (
//             <div className="re-header">
//                 Header
//             </div>
//         )
//     }
// }
// export default withRouter(Header)
