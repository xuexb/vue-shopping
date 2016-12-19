/**
 * @file 商品 - 单个
 * @author xieyaowu <fe.xiaowu@gmail.com>
 */

import Vue from 'vue';

import {get} from 'api/index';
import * as types from '../types';

const state = {
    // 状态, loading, success, error, empty
    status: null,
    product: null,
    selected: {}
};

// getters
const getters = {
    [types.ITEM_STATUS](state) {
        return state.status;
    },
    [types.ITEM_PRODUCT](state) {
        return state.product;
    },
    [types.ITEM_SELECTED](state) {
        return state.selected;
    }
};

// actions
const actions = {
    [types.ITEM_ACTION_GETDATA]({commit, state}, {id}) {
        commit(types.ITEM_MUTATION_STATUS, 'loading');

        get('/api/product', {
            id
        }).then(data => {
            if (data) {
                commit(types.ITEM_MUTATION_DATA, data);
                commit(types.ITEM_MUTATION_STATUS, 'success');
            }
            else {
                commit(types.ITEM_MUTATION_STATUS, 'error');
            }
        }).catch(err => {
            commit(types.ITEM_MUTATION_STATUS, 'error');
        });
    },

    [types.ITEM_ACTION_SELECTED]({commit, state}, {key, value}) {
        commit(types.ITEM_MUTATION_SELECTED, {key, value});
    },

    [types.ITEM_ACTION_SELECTED_STATUS]({state}, {key, value}) {
        console.log(key, value)
    }
};

// mutations
const mutations = {
    [types.ITEM_MUTATION_STATUS](state, status) {
        state.status = status;
    },

    [types.ITEM_MUTATION_DATA](state, data) {
        state.product = data;
    },

    [types.ITEM_MUTATION_SELECTED](state, {key, value}) {
        if (state.selected[key] === value) {
            Vue.delete(state.selected, key);
        }
        else {
            Vue.set(state.selected, key, value);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
