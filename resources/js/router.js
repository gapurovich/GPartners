import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from './components/Views/Index';
import Authorization from './components/Views/Authorization';
import EarnMoney from './components/Views/EarnMoney';

const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/about',
        component: Authorization,
    },
    {
        path: '/earn-money',
        component: EarnMoney,
    }
];

export default new vueRouter({
    mode: 'history',
    routes
})
