<template>
    <div class="fields">
       <div class="wrapper">
            <City @city-changed="handleCity" />
       </div>
        <div class="wrapper">
            <Date/>
        </div>
        <div class="wrapper">
           <Period @change-period="handlePeriod"/>
        </div>
        <div class="wrapper">
            <WareHouse @warehouse-changed="handleWarehouse" />
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
    },
    methods: {
        handleCity(currentCity) {
            this.filterParams.city = currentCity
        },
        handleWarehouse(currentWarehouse) {
            this.filterParams.warehouse = currentWarehouse
        },
        handlePeriod(periodFromTo) {
            console.log(periodFromTo)
            this.filterParams.periodFrom = periodFromTo[0]
            this.filterParams.periodTo = periodFromTo[1]
        }
    },
    data() {
        return {
            filterParams: {
                city: '',
                warehouse: '',
                period: '',
                periodFrom: '',
                periodTo: ''
            }
        }
    },
    watch: {
        filterParams: {
            handler() {
                this.$emit('filterParams-changed', this.filterParams)
            },
            deep: true
        }
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