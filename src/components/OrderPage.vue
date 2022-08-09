<template>
     <div class="promo">
       <div class="header">
        <div class="wrapper-left">
            <div class="text">Список новых заявок</div>
            <img src="./../assets/update.svg" alt="update" @click="reset" class="reset">
        </div>
        <div class="search">
            <img src="./../assets/Vector.svg" alt="search" class="search-logo">
            <input type="text" placeholder="Поиск..." v-model="this.filters.search" @keypress.enter="getOrders">
        </div>
    </div>
    <Fields />
    <div class="content">
        <div class="title">Список заказов</div>
            <div>
                <div class="columns">
                <input type="checkbox" name="checkbox" class="checkbox"/>
                <span>Номер заказа</span>
                <span>Адрес</span>
                <span>Получатель</span>
                <span>Дата / Период</span>
            </div>
            </div>
        <hr>
        <div v-for="order in orders" :key="order.id">
                <div class="columns">
                    <input type="checkbox" name="checkbox" class="checkbox"/>
                    <router-link :to="`/${order.id}`">
                    <span class="span"><span class="blue">{{ order.number }}</span></span>
                    <span class="span">{{ order.address.city.name }}, {{ order.address.street }}</span>
                    <span class="span">{{ order.client.name }}</span>
                    <span class="span">{{ order.deliver_at }}, {{ order.period_begin_at.slice(0, -3) }} - {{ order.period_end_at.slice(0, -3) }}</span>
                    </router-link>
                </div>
            <hr>
        </div>
    </div>
    <Pagination :all="this.amount"/>
    </div>
</template>

<script>
import Fields from './Fields.vue'
import Pagination from './Pagination.vue'
import { useStore } from './../store/store'
export default {
    name: 'OrderPage',
    components: {
        Fields,
        Pagination
    },

    data() {
        return {
            filters: useStore().$state.params,
            orders: [],
            amount: 0
        }
    },
    async mounted() {
        this.getOrders()
    },
    methods: {
        async getOrders() {
            await fetch('http://delivery-testapi.evrika.com/api/dispatcher/deliveries?' 
            + `&city=${this.filters.city}`
            + `&warehouse=${this.filters.warehouse}`
            + `&periodFrom=${this.filters.periodFrom}`
            + `&periodTo=${this.filters.periodTo}`
            + `&page=${this.filters.page}`
            + `&perPage=${this.filters.perPage}`
            + `&status=0`
            + `&search=${this.filters.search}`
            , {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => response.json())
            .then(json => {
                this.amount = json.meta.total
                console.log(this.amount)
                this.orders = json.data
            })
        },
        passFilters(filterParams) {
            console.log(this.filters)
            this.filters = filterParams
        },
        reset() {
            useStore().resetParams()
        }
    },
    watch: {
        filters: {
            handler() {
                this.getOrders()
            },
            deep: true
        }
    },
}
</script>

<style scoped>
.reset {
    cursor: pointer;
}
.promo {
    margin-right: 50px;
    padding-top: 30px;
}
.header {
    display: flex;
    justify-content: space-between;
}
input {
    width: 400px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 7.5px 15px 7.5px 35px;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #7F7F7F;
    border: none;
}
.text {
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #001529;
}
.blue {
    color: #0069FF;
}
a{
    display: contents;
}
img {
    margin-left: 30px;
}
.search{
    position: relative;
}
.search-logo {
    position: absolute;
    left: 15px;
    top: 9px;
    margin: 0;
}
.checkbox {
    width: 13px;
    height: 13px;
    cursor: pointer;
}
.content {
    width: 100%;
    margin-top: 40px;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 10px;
    padding: 20px 20px 4px 20px;
}
.title {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #001529;
    padding-bottom: 28px;
}
.columns {
    display: grid;
    grid-template-columns: 3% 14% 41% 19% auto;
    column-gap: 10px;
}

span {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #029AAD;
}
.span {
    font-weight: 400;
    color: #001529
}
hr {
    margin: 16px 0 16px 0;
    border: 0.5px solid #F0F0F0;
    width: 100%;
}
.wrapper-left {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
}
</style>