import {
    // createStore,
    combineReducers,
    // applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';
import {
    configureStore
} from '@reduxjs/toolkit';

// Reducer
// 是函数，并且是纯函数
// 它是redux的store中发挥核心作用的工具，是真正处理数据的地方
// 必须strore,必须要定义reducer
import study from './module/studyReducer'
import music from './module/musicReducer';

const rootReducer = combineReducers({
    study,
    music
})


const store = configureStore({
    reducer: rootReducer,
});

// 旧版写法
// const store = createStore(rootReducer, applyMiddleware(await thunk()))

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