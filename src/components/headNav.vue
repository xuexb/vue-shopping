<template>
    <div>
        <el-menu mode="horizontal" :default-active="active" :router="true">
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item index="/list">商品列表</el-menu-item>
            <el-menu-item index="/cart">购物车</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'headNav',
    data() {
        return {
            active: this.$route.path
        }
    }
}
</script>

<style scoped>
</style>
