/**
 * @file vue主入口
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import App from './App';
import store from './store';
import filter from './filter';
import routes from './routes';

// Vue.filter('filter', filter)
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');
