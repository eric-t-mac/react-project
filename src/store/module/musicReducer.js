import type from '../actionType'

const initState = {
    list: []
}

export default function musicReducer(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case type.AJAX_MUSIC_LIST:
            newState.list = action.payload
            break;
        default:
            return state
    }
    return newState;
}