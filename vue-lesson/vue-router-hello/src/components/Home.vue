<template>
  <div>
    <h3>Home</h3>
    <ul>
      <li>
        <router-link to="/frontend">跳转到 前端</router-link>
      </li>
      <li>
        <router-link to="/backend">跳转到 后端</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>