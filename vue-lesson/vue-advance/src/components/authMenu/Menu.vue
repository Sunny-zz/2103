<template>
  <div>
    <template v-for="item in menu">
      <el-submenu v-if="item.children" :key="item.id" :index="item.id.toString()">
        <template #title>
          <router-link :to='{name: item.auth}'><span>{{item.name}}</span></router-link>
        </template>
        <Menu :menu='item.children' />
      </el-submenu>
      <el-menu-item v-else :key="item.id" :index="item.id.toString()">
        <template #title>
          <router-link :to='{name: item.auth}'><span>{{item.name}}</span></router-link>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script>

export default {
  name: "Menu",
  props: ["menu"],
};
</script>

<style>
</style>