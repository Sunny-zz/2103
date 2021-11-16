<template>
  <div class="menu">
    <div v-for="item in menuData" :key="item.label">
      <h5>{{ item.label }} <span v-if="item.children">></span></h5>
      <!-- 可能有子菜单 -->
      <Menu v-if="item.children"  :menuData='item.children' />
    </div>
    <!-- 组件递归的时候还需要注意 第一次使用组件的时候传递了什么数据，递归的时候要传同样的数据， 而且在递归的时候需要设置条件，否则无限递归  -->
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["menuData"],
};
</script>

<style>
</style>