import Vue from "vue"
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const Foo = { template: '<div>foo {{$route.params.id}}</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo/:id', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes: routes
});
const app = new Vue({
    router
}).$mount('#app');