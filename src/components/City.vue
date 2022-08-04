<template>
  <div class="filter">
    <img src="./../assets/City.svg" alt="city" id="city-logo" />
    <div class="select-wrapper">
        <select @change="$emit('city-changed', currentCity)" v-model="currentCity" class="select" name="cities" id="city">
            <option disabled value="">Город</option>
            <option v-for="city in cities" :key="city.name">{{ city.name }}</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        this.getCities()
    },
    methods: {
        async getCities() {
            const response = await fetch('http://delivery-testapi.evrika.com/api/dispatcher/cities', {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = (await response.json()).data
            this.cities = data
        }
    },
    data() {
        return {
            cities: [],
            currentCity: ''
        }
    } 
}
</script>

<style >
#city-logo {
    position: absolute;
    top: 14.5px;
    left: 15px;
}
select {
    width: 100%;
    appearance: none;
    border: none;
    height: 45px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    padding: 14.5px 39px;
    color: #7F7F7F;
    cursor: pointer;
}
.select-wrapper::after {
    content: url('./../assets/Button.svg');
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 19.5px;
    pointer-events: none;
}

</style>
