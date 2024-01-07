// import React from "react";
import loadable from '@loadable/component';

const Home = loadable(() => import('@/views/home/Home'))

const routes = [
    {
        id: 10,
        text: '概况管理',
        icon: '',
        children: [
            {
                id: 1010,
                text: '首页',
                path: '/',
                component: Home
            }
        ]
    }
]

export default routes;