import { defineStore } from 'pinia'

export const useStore = defineStore ('main' , {
    state: ()=> ({
        params: {
            city: '',
            period: '',
            periodFrom: '',
            periodTo: '',
            warehouse: '',
            page: 1,
            perPage: 10,
            search: ''
        }
        
    }),
    actions: {
        splitPeriod() {
            const res = this.$state.params.period.split('-');
            this.$state.params.periodFrom = res[0];
            this.$state.params.periodTo = res[1];
        },
        resetParams() {
            this.$state.params.city = ''
            this.$state.params.period = ''
            this.$state.params.periodFrom = ''
            this.$state.params.periodTo = ''
            this.$state.params.warehouse = ''
            this.$state.params.page = 1
            this.$state.params.search = ''
        }
    }

})