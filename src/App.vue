<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import Auth from './views/Auth.vue'
export default {
  name: 'App',
  components: {
    Auth
  }
}
</script>
