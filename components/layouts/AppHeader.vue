<template>
  <nav class="navbar navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <nuxt-link class="d-inline d-lg-none" to="#"><img src="~/assets/img/logo.png" alt=""></nuxt-link>
      <div class="d-none d-lg-inline">
        <LayoutsNavLinks />
      </div>
      <div class="d-none d-lg-inline">
        <button type="button" class="btn app-border">
          <img src="~/assets/img/zap.png" alt="fidia image">Upgrade now
        </button>
        <img class="" src="~/assets/img/cog.png" alt="fidia image">
        <img class="" src="~/assets/img/noti.png" alt="fidia image">
        <img class="" src="~/assets/img/avatar.png" alt="fidia image">
      </div>
      <img @click="toggleDrawer" class="d-inline d-lg-none abs" src="~/assets/img/menu.png" alt="fidia image">
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style scoped>
  .right-links > * {
    cursor: pointer;
  }
  .abs {
    position: absolute;
    right: 20px;
    z-index: 99999;
  }
  @media (min-width: 768px) {
    .right-links > * {
      margin-left: 20px;
    }
  }
</style>
