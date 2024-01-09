import type from './actionType';
import { fetchQqMusic } from '@/utils/api';

// action 生成器
function changeMsgAction(payload) {
    return {
        type: type.CHANGE_MSG,
        payload
    }
}

function addFooCountAction(payload) {
    return {
        type: type.ADD_FOO_COUNT,
        payload
    }
}

// 页面中要是用 QQ 音乐列表？数据从后端来，要从状态管理工具来
// 状态管理工具有这个QQ音乐列表？没有，如何定义？
// 在子reducer中定义完成，在根store中合并
// 现在我要在页面中使用 音乐列表，怎么使用？useSelector()

// 已经知道 QQ音乐 数据来自后端，它必须经过store才能进入组件。
// 那QQ音乐数据，该怎么进入到store？

// redux 不支持异步数据
// function musicListAction(params) {
//     return function (dispatch) {
//         fetchQqMusic(params).then(res => {
            // 这才是真正把后端数据，发送到store中
//             dispatch({
//                 type: type.AJAX_MUSIC_LIST,
//                 payload: []
//             })
//         })
//     }
// }
// redux-thunk默认提供了dispatch  redux-saga
// dispatch(function(dispatch({type: '', payload: ''})))
    


// async/await写法
async function musicListAction(params, dispatch) {
    const res = await fetchQqMusic(params);
    dispatch({
        type: type.AJAX_MUSIC_LIST,
        payload: res.song.itemlist
    }) 
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    changeMsgAction,
    addFooCountAction,

    musicListAction
}