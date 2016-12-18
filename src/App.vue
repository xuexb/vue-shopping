<template>
    <div id="app">
        <head-nav></head-nav>
        <router-view></router-view>
    </div>
</template>

<script>
import HeadNav from './components/headNav';

export default {
    name: 'app',
    components: {
        HeadNav
    }
}
</script>