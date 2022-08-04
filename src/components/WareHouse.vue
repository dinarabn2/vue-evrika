<template>
<div class="filter">
    <img src="./../assets/Warehouse.svg" alt="city" id="city-logo" />
    <div class="select-wrapper">
        <select @change="$emit('warehouse-changed', currentWarehouse)" v-model="currentWarehouse" class="select" name="warehouses" id="warehouse">
            <option disabled value="">Склад</option>
            <option v-for="warehouse in warehouses" :key="warehouse.name">{{ warehouse.name }}</option>
        </select>
  </div>
</div>
</template>

<script>
export default {
    created() {
        this.getWareHouse()
    },
    methods: {
        async getWareHouse() {
            const response = await fetch('http://delivery-testapi.evrika.com/api/dispatcher/warehouses', {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = (await response.json()).data
            this.warehouses = data
        }
    },
    data() {
        return {
            warehouses: [],
            currentWarehouse: ''
        }
    } 
}
</script>