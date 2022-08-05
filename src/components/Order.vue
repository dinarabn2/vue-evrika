<template>
    <div class="order">
        <router-link to="/main/order" class="back">
            <img src="./../assets/Back.svg" alt="back arrow">
            <span class="order-back">Назад</span>
        </router-link>
        <div class="information">
            <div class="order-number">Заказ № <span>{{ orders.number }}</span></div>
            <span class="order-date"><img src="./../assets/Date.svg" alt="date"> <span>{{ orders.deliver_at }}</span> </span>
            <span class="order-date"><img src="./../assets/Time.svg" alt="time"> <span>{{ orders?.period_begin_at?.slice(0, -3) }} - {{ orders?.period_end_at?.slice(0, -3) }}</span> </span>
        </div>
        <main>
            <div>
                <div class="order-list">
                <div class="order-text">Список заказов</div>
                <div class="order-items">
                    <span>№</span>
                    <span>Номер</span>
                    <span>Цена за шт</span>
                    <span>Склад</span>
                    <span>Шт</span>
                    <span>Качество</span>
                </div>
                <hr>
                <ul>
                    <div v-for="(product, i) in orders.products" :key="product.id">
                         <li>
                            <span>{{i + 1}}</span>
                            <span>{{ product.name }}</span>
                            <span>{{ product.details.price }} ₸</span>
                            <span>{{ product.details.warehouse_name }}</span>
                            <span>{{ product.details.quantity }}</span>
                            <span>{{ product.quality }}</span>
                        </li>
                    </div>
                </ul>
            </div>

            <div class="order-list">
                <div class="order-text">Информация о доставке</div>
                <div class="info-delivery">
                    <span class="item">Основание: <span>{{ orders.basis}}</span></span>
                    <span class="item">Отпущено со склада: <span>{{ orders.warehouse }}</span></span>
                    <span class="item">Курьеры: <span>{{ orders?.group?.users?.username ? pushName(orders?.group?.users?.username) : 'Не назначен'}}</span> </span>
                    <span class="item">Машина: <span>{{ orders?.group?.car?.number ? orders.group.car.number : 'Не назначен' }}</span></span>
                </div>
            </div>
            </div>

            <div class="order-list">
                <div class="order-text">Информация о клиенте</div>
                <div class="info-client">
                    <div class="order-subtitle">Клиент</div>
                    <div class="wrapper">
                        <span class="item">ФИО: <span>{{ orders?.client?.name }}</span></span>
                        <span class="item">Телефон: <span>{{ orders?.client?.primary_phone }}</span></span>
                        <span class="item">Доп. телефон: <span>{{ orders?.client?.secondary_phone ? orders?.client?.secondary_phone : 'Отсутствует' }}</span></span>
                    </div>
                    <div class="order-subtitle">Адрес</div>
                        <div class="wrapper">
                            <span class="item">Город: <span>{{ orders?.address?.city?.name }}</span></span>
                            <span class="item">Улица / микрорайон: <span>{{ orders?.address?.street }}</span></span>
                            <span class="item">Дом: <span>{{ orders?.address?.building ? orders?.address?.building :'Отсутствует'}}</span></span>
                            <span class="item">Квартира: <span>{{ orders?.address?.apartment ? orders?.address?.apartment : 'Отсутствует'}}</span></span>
                            <span class="item">Этаж: <span>{{ orders?.address?.floor ? orders?.address?.floor : 'Отсутствует' }}</span></span>
                            <span class="item">Лифт: <span>{{ orders?.address?.elevator ? orders?.address?.elevator : 'Отсутствует' }}</span></span>
                        </div>
                    <div class="order-subtitle">Координаты</div>
                        <div class="wrapper">
                            <span class="item">Широта: <span>{{ orders?.address?.lat ? orders?.address?.lat : 'Отсутствует'}}</span></span>
                            <span class="item">Долгота: <span>{{ orders?.address?.lng ? orders?.address?.lng : 'Отсутствует'}}</span></span>
                        </div>
                    <div class="order-subtitle">Комментарий</div>
                    <span class="comment">{{ orders.comment }}</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: {}
        }
    },
    created() {
        this.getOrderById(this.$route.params.id)
    },
    methods: {
        async getOrderById(id) {
            const res = await fetch(`http://delivery-testapi.evrika.com/api/dispatcher/deliveries/${id}`, {
                 headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            this.orders = data.data
            console.log(this.orders);
        },
        pushName(users) {
            const fullNames = []
            users.forEach(el => {
                fullNames.push(`${el.first_name} ${el.last_name}`)
            })
            const str = fullNames.join(', ')
            return str
        }
    }
}
</script>

<style scoped>
.order {
    padding: 30px 50px 0 0;
}
.back {
    text-decoration: none;
}
.order-back {
    margin-left: 8px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #001529;
}
.order-number {
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #001529;
}
.order-number>span {
    color: #029AAD;
}
.information {
    display: grid;
    grid-template-columns: 30% 7% 10%;
    align-items: center;
    margin-top: 8px;
    column-gap: 80px;
}
.order-date {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #001529;
}
.order-date>span {
    margin-left: 8px;
}
main {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 58% auto;
    gap: 40px;
    grid-auto-columns: auto;
}
.order-list {
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 10px;
    padding: 20px;
}
.order-list:first-child {
    margin-bottom: 40px;
}
.order-text {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #001529;
}
.order-items, li {
    margin-top: 28px;
    display: grid;
    grid-template-columns: 3.5% 36% 16% 18% 6% auto;
    column-gap: 10px;
}
li>span {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #001529;
}
.order-items>span {
    color: #029AAD;
}
hr {
    margin-top: 16px;
    border: 0.5px solid #F0F0F0;
    width: 100%;
}
.info-delivery, .info-client {
    margin-top: 32px;
}
.order-subtitle {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #001529;
}
.item {
    display: grid;
    grid-template-columns: 45% auto;
    column-gap: 10px;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #7F7F7F;
    margin-bottom: 12px;
}
.wrapper {
    margin-bottom: 20px;
}
.item>span {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #001529;
}
.comment {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #001529;
}
</style>