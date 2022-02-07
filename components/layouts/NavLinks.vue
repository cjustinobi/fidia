<template>
  <ul :class="{'ul': showDrawer}">
    <li>
      <nuxt-link to="#"><img src="~/assets/img/logo.png" alt=""></nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Dashboard</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Projects</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Tasks</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Reporting</nuxt-link>
    </li>
    <li>
      <nuxt-link to="#">Users</nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'NavLinks',
    computed: {
      showDrawer() {
        return this.$store.getters['isDrawer']
      }
    }
  }
</script>

<style scoped>
  .ul li{
    display: block;
    margin-bottom: 20px;
  }
</style>
