/**
 * @file vuex主入口
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import cart from './modules/cart';
import product from './modules/product';
import item from './modules/item';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        cart,
        product,
        item
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
