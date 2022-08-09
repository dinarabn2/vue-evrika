<template>
    <div class="footer">
        <div class="img">
            <div class="footer-icon" @click="decrement">
                <img src="./../assets/left.svg" alt="left-arrow">
            </div>
            <div class="footer-icon right" @click="increment">
                <img src="./../assets/right.svg" alt="right-arrow">
            </div>
        </div>
        <div class="footer-descr">Всего: {{ all }} </div>
        <div class="footer-select">
            <div class="select-count">
                <select v-model="params.perPage">
                    <option value="10">10 заказов</option>
                    <option value="20">20 заказов</option>
                    <option value="30">30 заказов</option>
                    <option value="40">40 заказов</option>
                    <option value="50">50 заказов</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '@/store/store'

export default {
    name: 'Pagination',
    data() {
        return {
            params: useStore().$state.params,
            paginationFilter: 10
        }
    },
    props: {
        all: Number
    },
    methods: {
        increment() {
            return this.params.page++;
        },
        decrement() {
            if (this.params.page !== 1) {
                return this.params.page--;
            }

        }
    }
}
</script>

<style scoped>
.footer {
    position: absolute;
    right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    width: 288px;
    padding-bottom: 30px;
}
.footer-icon {
    width: 27px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.footer-descr {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #001529;
}
select {
    width: 101px;
    height: 31px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-weight: 400;
    font-size: 13px;
    color: #001529;
    padding: 8px;
    box-shadow: none;
}
.img {
    display: inherit;
}
.right {
    margin-left: 10px;
}
.select-count::after {
    content: url('./../assets/small.svg');
    position: absolute;
    right: 5px;
    top: 5px;
    pointer-events: none;
}
</style>