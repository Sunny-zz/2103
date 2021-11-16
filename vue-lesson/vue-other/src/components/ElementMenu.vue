<template>
  <div>
    <template v-for="item in menuData">
      <el-submenu :index="item.label" v-if="item.children" :key="item.label">
        <template slot="title">
          <span>{{ item.label }}</span>
        </template>
        <!-- 有子菜单 -->
        <ElementMenu :menuData='item.children' />
      </el-submenu>
      <el-menu-item :index="item.label" v-else :key="item.label">
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ["menuData"],
  name: "ElementMenu",
};
</script>

<style>
</style>