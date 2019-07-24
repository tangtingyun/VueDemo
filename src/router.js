import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Hello
        },
        {
            path: '/event',
            name: 'event',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/EventListener.vue')
        },
        {
            path: '/css',
            name: 'css',
            component: () => import('./views/CssPages.vue')
        },
        {
            path: '/vnode',
            name: 'vnode',
            component: () => import('./views/VnodePage.vue')
        },
        {
            path: '/clip',
            name: 'clip',
            component: () => import('./views/clipPath.vue')
        }
    ]
})
