<template>
  <div class="for-demo">
    <!-- 递归组件：就是组件内部使用组件本身， 前提是必须给组件设置 name 属性, name 属性的值就是组件标签名 -->
    <Menu :menuData="menuData" />
    <hr />
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="width: 200px"
    >
      <ElementMenu :menuData="menuData" />
    </el-menu>
  </div>
</template>

<script>
import ElementMenu from "./ElementMenu.vue";
import Menu from "./Menu.vue";

export default {
  components: { Menu, ElementMenu },
  data() {
    return {
      level: 5,
      menuData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 4",
        },
      ],
    };
  },
};
</script>

<style>
</style>