<template>
    <div class="fields">
       <div class="wrapper">
            <City/>
       </div>
        <div class="wrapper">
            <Date/>
        </div>
        <div class="wrapper">
           <Period/>
        </div>
        <div class="wrapper">
            <WareHouse />
        </div>
    </div>
</template>

<script>
import City from './City.vue'
import Date from './Date.vue'
import Period from './Period.vue'
import WareHouse from './WareHouse.vue'
export default {
    name: 'Fields',
    components: {
        City,
        Date,
        Period,
        WareHouse
    }
}
</script>

<style scoped>
.wrapper{
    position: relative;
}
.fields {
    margin-top: 40px;
    display: grid;
    column-gap: 35px;
    grid-template-columns: auto auto auto auto;
}
</style>