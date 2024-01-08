import axios from "./axios";

export async function fetchQqMusic(params) {
    return await axios({
        url: '/splcloud/fcgi-bin/smartbox_new.fcg',
        method: 'GET',
        params
    })
}

// export default {
//     fetchQqMusic
// }