import { createRouter, createWebHistory } from "vue-router";
import Auth from './views/Auth.vue'

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: {
              name: "login",
            },
        },
        {
            path: '/login',
            name: "login",
            component: Auth
        },
        {
            path: '/main',
            name: "main",
            redirect: {
                name: 'order',
              },
            component: () => import('./views/Deliveries.vue'),
            children: [
                {
                    path: '/main/order',
                    name: 'order',
                    component: () => import('/src/components/OrderPage.vue')
                },
                {
                    path: '/:id',
                    component: () => import('/src/components/Order.vue')
                }
            ]
        },
    ]
})