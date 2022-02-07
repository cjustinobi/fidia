<template>
  <aside :class="[{'d-none': !showDrawer}, {'add-width': showDrawer}]">
    <LayoutsNavLinks />
  </aside>
</template>

<script>
  export default {
    name: 'Drawer',
    computed: {
      showDrawer() {
        return this.$store.getters['isDrawer']
      }
    }
  }
</script>

<style scoped>
  aside {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 0;
    padding: 70px;
    background-color: #d6d4d4;
    transition: 0.5s;
    z-index: 9999;
  }
  .add-width {
    width: 100%;
    transition: 0.5s;
  }
</style>
