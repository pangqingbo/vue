import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ArrList from '../components/ArrList.vue'
import GetLabel from '../components/GetLabel.vue'
import CardUse from '../components/CardUse.vue'

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
            },
            {
                path: 'card',
                component: CardUse
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router