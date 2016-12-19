<template>
    <div class="item">
        <ul v-if="status === 'success'">
            <li>
                <img :src="product.img" width="200" :alt="product.name" />
            </li>
            <li>
                名字: {{ product.name }}
            </li>
            <li>
                描述: {{ product.desc }}
            </li>
            <li>
                <dl class="choose-spec clearfix" v-for="(item, key) in product.param">
                    <dt>{{ key }}: </dt>
                    <dd
                        v-for="(text, index) in item"
                        @click="setSelected({key: key, value: text})"
                        :class="byClass(key, text)"
                    >
                        <span>{{ text }}</span>
                    </dd>
                </dl>
            </li>
            <li>
                <el-button type="primary" :disabled="selectedArr.length !== paramArr.length">添加到购物车</el-button>
            </li>
        </ul>
        <p v-if="status === 'loading'">加载中</p>
        <p @click="reload()" v-if="status === 'error'">加载出错, 点击重试</p>
        <p v-if="status === 'empty'">当前没有数据</p>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import * as types from '../store/types';

export default {
    name: 'list',
    data() {
        return {
            id: this.$route.params.id
        };
    },

    computed: {
        ...mapGetters({
            status: types.ITEM_STATUS,
            product: types.ITEM_PRODUCT,
            selected: types.ITEM_SELECTED
        }),

        selectedArr() {
            return Object.keys(this.selected);
        },

        paramArr() {
            return Object.keys(this.product.param);
        }
    },

    methods: {
        ...mapActions({
            getData: types.ITEM_ACTION_GETDATA,
            setSelected: types.ITEM_ACTION_SELECTED,
            selectedStatus: types.ITEM_ACTION_SELECTED_STATUS
        }),

        reload() {
            return this.getData({
                id: this.id
            });
        },

        byClass(key, value) {
            let disabled = null;

            if (!this.selectedArr.length) {
                disabled = !this.product.price.some(val => {
                    return val.param
                        && val.param[key]
                        && (val.param[key] === value || val.param[key].indexOf(value) !== -1);
                });
            }
            else {
                let data = this.product.price.filter(val => {
                    let flag = false;

                    this.selectedArr.some(selectedKey => {
                        if (!val.param || !val.param[selectedKey]) {
                            return true;
                        }

                        if (val.param[selectedKey] === this.selected[selectedKey] || val.param[selectedKey].indexOf(this.selected[selectedKey]) > -1) {
                            flag = true;
                            return true;
                        }
                    });

                    return flag;
                });

                console.log(JSON.stringify(data, null, 4));
            }

            if (disabled !== null) {
                return {
                    disabled
                };
            }

            return {
                selected: this.selected[key] === value,
            };
        }
    },

    mounted() {
        this.reload();
    },

    components: {
    },

    watch: {
        selected() {
            console.log(this.selected)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0; 
    padding: 0; 
}

.item {
    margin-left: 20px; 
}

/*参数*/
.choose-spec {
    margin-bottom: 3px;
    line-height: 32px;
    padding-left: 70px; 
    user-select: none;
}
.choose-spec dt {
    margin-left: -70px; 
    float: left; 
    width: 70px; 
}
.choose-spec dd {
    display: inline-block; 
    color: #666;
    background-color: #FFF;
    margin-right: 7px;
    margin-bottom: 4px;
    border: 1px solid #ccc;
    padding: 0 13px;
    white-space: nowrap;
    cursor: pointer; 
}
.choose-spec .selected {
    background-color: #e3393c; 
    border-color: #e3393c;
    color: #fff; 
}
.choose-spec .disabled {
    background-color: #cfcfcf; 
    color: #fff; 
    border-color: #cfcfcf; 
    cursor: default; 
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}
</style>