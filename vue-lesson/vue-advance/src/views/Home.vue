<template>
  <div class="home">
    <AuthMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import AuthMenu from '../components/authMenu/AuthMenu.vue'
export default {
  components: { AuthMenu },

}
</script>

<style>
.home{
  display: flex;
}
</style>