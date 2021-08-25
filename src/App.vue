<template>
  <div>
    <router-view />
    <Navbar/>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./layouts/Navbar.vue"),
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

