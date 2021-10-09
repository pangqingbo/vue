import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ArrList from '../components/ArrList.vue'
import GetLabel from '../components/GetLabel.vue'

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: 'arrlist',
                component: ArrList
            },
            {
                path: 'getlabel',
                component: GetLabel
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router