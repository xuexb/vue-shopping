/**
 * @file 商品 - 列表
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import {get} from 'api/index';
import * as types from '../types';

const state = {
    // 状态, loading, success, error, empty
    status: null,
    list: []
};

// getters
const getters = {
    [types.PRODUCT_STATUS](state) {
        return state.status;
    },
    [types.PRODUCT_LIST](state) {
        return state.list;
    }
};

// actions
const actions = {
    [types.PRODUCT_ACTION_GETDATA]({commit, state}) {
        commit(types.PRODUCT_MUTATION_STATUS, 'loading');

        get('/api/product').then(data => {
            if (data && data.length) {
                commit(types.PRODUCT_MUTATION_LIST, data);
                commit(types.PRODUCT_MUTATION_STATUS, 'success');
            }
            else {
                commit(types.PRODUCT_MUTATION_STATUS, 'empty');
            }
        }).catch(err => {
            commit(types.PRODUCT_MUTATION_STATUS, 'error');
        });
    }
};

// mutations
const mutations = {
    [types.PRODUCT_MUTATION_STATUS](state, status) {
        state.status = status;
    },

    [types.PRODUCT_MUTATION_LIST](state, list) {
        state.list = list;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
