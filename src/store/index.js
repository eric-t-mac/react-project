import {
    createStore
} from 'redux';
import {
    configureStore
} from '@reduxjs/toolkit';

// Reducer
// 是函数，并且是纯函数
// 它是redux的store中发挥核心作用的工具，是真正处理数据的地方
// 必须strore,必须要定义reducer

let initState = {
    msg: 'this is the redux',
    foo: {
        count: 0
    }
}

function reducer(state=initState, action) {
    // 第一步，接收store给的信号（干什么、数据）
    // 第二部，数据处理
    // 第三部，把处理完的数据，返回给store
    console.log('来自于视图组件的payload', action);
    // let newState = {...state}
    // leet newState = Object.assign()
    // 深复制
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case 'change':
            newState.msg = action.payload;
            break;
        case 'add': 
            newState.foo.count += action.payload;
            break;
        default:
            return state
    }
    return newState
}

const store = configureStore({
    reducer: reducer
});

export default store;

// 如何使用redux？
// 一、在src/store/index.js中定义store，伪代码如下：

// cnpm install redux -S
// 1、创建store，怎么创建呢？ createStore(reducerFn)
// 2、定义reducerFn， function reducerFn(state={}, action) { switch 语句 }
// 3、export default store

// 二、在App.js使用上下文引入store

// cnpm install react-redux -S
// import { Provider } from 'react-redux'
// export default () => (<Provider store={store}></Provider>)

// 三、在组件中，使用store数据，
// 有两种方式： 一是使用connect()的写法， 二是使用hooks写法
// 1、如果使用connect()的方式：export default connect(fn1,fn2)(Home)
// 2、如果使用hooks的方式，const msg = userSelect(store=>store.msg)
// 建议使用hooks写法