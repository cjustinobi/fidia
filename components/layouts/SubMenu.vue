<template>
  <nav class="navbar sub-pad d-none d-lg-block mt-2">
    <div class="container-fluid">
      <ul class="ul">
        <li>
          <nuxt-link to="#">Overview</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Notifications</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Analytics</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Saved Reports</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">Trade History</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">User Reports</nuxt-link>
        </li>
      </ul>
      <input class="form-control border" placeholder="Search" />
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'SubMenu'
  }
</script>

<style scoped>
  .sub-pad {
    padding: 0 60px !important;
  }
  button {
    width: 320px;
  }
  input {
    width: 300px;
  }

  @media (max-width: 1218px) {
    button {
      width: 120px;
    }
  }
</style>
