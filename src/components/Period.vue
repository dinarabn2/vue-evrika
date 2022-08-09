<template>
  <div class="filter">
    <img src="./../assets/Time.svg" alt="date" id="city-logo" />
    <div class="select-wrapper">
        <select class="select" name="date" id="date" v-model="params.period" @change="setPeriod">
            <option disabled value="">Период</option>
            <option value="11:00-17:00">11:00 - 17:00</option>
            <option value="17:00-21:00">17:00 - 21:00</option>
        </select>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store'
export default {
    data() {
        return {
            periodFilter: '',
            params: useStore().$state.params
        }
    },
    methods: {
        setPeriod() {
            useStore().splitPeriod()
        }
    }
}
</script>