<template>
  <div class="nav">
    <b-link @click="$router.push('/')" class="nav-item">Clock</b-link>
    <b-link @click="$router.push('/history')" class="nav-item">History</b-link>
    <b-link @click="$router.push('/contact')" class="nav-item">Contact</b-link>
    <b-link @click="$router.push('/my')" class="nav-item">My</b-link>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.nav {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.nav-item {
  padding: 1rem;
  border: 1px solid red;
}
</style>
