import React, { useEffect } from "react";
import {
  // connect,
  useSelector,
  useDispatch,
} from "react-redux";
import action from '@/store/action'
// connect(fn1, fn2)()
// function mapStateToProps(store) {
//   return {
//     msg: store.msg,
//   };
// }
// function mapDispatchToProps(store) {
//   return {};
// }

// 第1种写法：使用 connect() + 函数式组件
// export default connect(mapStateToProps, mapDispatchToProps)(props => {
//     console.log('home: props', props);
//     return (
//         <>
//             <h1>home界面</h1>
//             <hr />
//             <h1>{props.msg}</h1>
//         </>
//     )
// })

// 第2种写法：使用 connect() + 类组件
// class Home extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>首页</h1>
//                 <hr />
//                 <h1>{this.props.msg}</h1>
//             </>
//         )
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)

// 第3种写法：使用 hooks + 函数式组件
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const msg = useSelector((store) => store.study.msg);
  const count = useSelector((store) => store.study.foo.count);
  const musicList = useSelector((store) => store.music.list)
  const dispatch = useDispatch() // 派发，派发的是actions
  const changeMsg = () => {
    // 我现在在Home组件中，想改变store中的msg
    // 触发一个actions，让它到store，再交给reducer
    // reducer是真正修改msg的地方，修改成功后返回store
    // Home自动更新
    dispatch(action.changeMsgAction('修改后的msg'))
  };

  useEffect(() => {
    const fetchData = async() => {
      // await dispatch(action.musicListAction({}))
      const str = `_=1704294660122&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=1&uin=596508302&g_tk_new_20200303=291690059&g_tk=291690059&hostUin=0&is_xml=0&key=%E5%91%A8%E6%9D%B0%E4%BC%A6`
      const params = {}
      str.split('&').forEach(ele => {
          let arr = ele.split('=');
          params[arr[0]] = arr[1];
      })
      // 正编码 encodeURL('张杰')
      // 反编码 
      params.key = decodeURI(params.key);
      await action.musicListAction(params, dispatch)
    }
    fetchData()
    return undefined
  }, [dispatch]) 

  return (
    <div>
      <>
        <h1>首页</h1>
        <hr />
        <h1>{msg}</h1>
        <button onClick={() => changeMsg()}>我要改变msg</button>
        <hr />
        <h1>{count}</h1>
        <button onClick={() => dispatch(action.addFooCountAction(5))}>我要改变count</button>
        <hr />
        {
          musicList && musicList.map(item => (
            <div key={item.id}>
              <span>{item.id}</span>
              <span>--</span>
              <span>{item.name}</span>
            </div>
          ))
        }
      </>
    </div>
  );
};
