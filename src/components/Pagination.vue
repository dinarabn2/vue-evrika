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
        <div class="footer-descr">Всего:  </div>
        <div class="footer-select">
            <div class="select-count">
                <select v-model="paginationFilter">
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
export default {
    name: 'Pagination',
    data() {
        return {
            currentPage: 1,
            paginationFilter: 10
        }
    },
    methods: {
        increment() {
            return this.currentPage++;
        },
        decrement() {
            if (this.currentPage !== 1) {
                return this.currentPage--;
            }

        }
    },
    watch: {
        currentPage: {
            handler() {
                this.$emit('page-changed', this.currentPage)
            },
        },
        paginationFilter: {
            handler() {
                this.$emit('count-changed', this.paginationFilter)
            },
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