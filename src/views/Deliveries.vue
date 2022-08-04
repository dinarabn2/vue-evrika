<template>
    <div class="main">
        <Menu />
        <router-view />
    </div>
</template>

<script>
import Menu from './../components/Menu.vue'
import OrderPage from './../components/OrderPage.vue'
export default {
    name: 'Deliveries',
    components: {
        Menu,
        OrderPage
    }
}
</script>

<style>
body {
    background-color: #F0F0F0;
}
.main {
    display: grid;
    grid-template-columns: 310px auto;
    column-gap: 50px;
}

</style>