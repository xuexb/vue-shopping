<template>
    <div>
        <ul v-if="status === 'success'">
            <li v-for="(item, index) in list">
                <router-link :to="{name: 'Item', params: {id: index}}">
                    <img :src="item.img" width="200" alt="">
                    <h3>{{ item.name }}</h3>
                </router-link>
            </li>
        </ul>

        <p v-if="status === 'loading'">加载中</p>
        <p @click="getData()" v-if="status === 'error'">加载出错, 点击重试</p>
        <p v-if="status === 'empty'">当前没有数据</p>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import * as types from '../store/types';

export default {
    name: 'list',
    data() {
        return {};
    },

    computed: {
        ...mapGetters({
            status: types.PRODUCT_STATUS,
            list: types.PRODUCT_LIST
        })
    },

    methods: {
        ...mapActions({
            getData: types.PRODUCT_ACTION_GETDATA
        }),
    },

    mounted() {
        this.getData();
    },

    components: {
    }
}
</script>

<style>

</style>