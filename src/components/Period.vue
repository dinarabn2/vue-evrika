<template>
  <div class="filter">
    <img src="./../assets/Time.svg" alt="date" id="city-logo" />
    <div class="select-wrapper">
        <select class="select" name="date" id="date" v-model="periodFilter" @change="$emit('change-period', splitPeriod())">
            <option disabled value="">Период</option>
            <option value="11:00-15:00">11:00 - 15:00</option>
            <option value="15:00-19:00">15:00 - 19:00</option>
            <option value="17:00-21:00">17:00 - 21:00</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            periodFilter: ''
        }
    },
    methods: {
        splitPeriod() {
            return this.periodFilter.split('-')
        }
    }
}
</script>