<template>
  <nav class="navbar navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <nuxt-link class="d-inline d-lg-none" to="#"><img src="~/assets/img/logo.png" alt=""></nuxt-link>
      <div class="d-none d-lg-inline">
        <LayoutsNavLinks :windowWidth="windowWidth"/>
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
    name: 'AppHeader',
    data() {
      return {
        windowWidth: '',
      }
    },
    methods: {
      toggleDrawer() {
        this.$store.commit('TOGGLE_DRAWER')
      },
      getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      }
    },
    beforeMount() {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth()
    },
    // watch: {
    //   windowWidth: {
    //     handler: function (val) {
    //       const mediumDevice = 992
    //       if (process.client) {
    //         val >= mediumDevice ? document.querySelector('.left-links, .right-links').classList.remove('d-none') :
    //           document.querySelector('.left-links, .right-links').classList.add('d-none')
    //       }
    //     },
    //     immediate: true
    //   }
    // }
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
