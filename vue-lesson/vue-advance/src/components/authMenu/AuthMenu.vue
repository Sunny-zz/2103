<template>
  <div>
    <!-- 权限菜单 -->
    <el-menu style="width: 200px">
      <Menu :menu="menu" />
    </el-menu>
  </div>
</template>

<script>
import { getMenuListAndAuths } from "../../utils";
import { authRoutes } from "../../router";
import Menu from "./Menu.vue";
export default {
  components: { Menu },
  data() {
    return {
      menu: [],
    };
  },
  async created() {
    const res = await this.$axios.post("/authmenu", { token: "normal" });
    // console.log(res);
    // 扁平化数组制作成树形数组
    const { menuList, auths } = getMenuListAndAuths(res);
    this.menu = menuList;
    // 根据菜单权限 动态添加路由   默认只有两个路由 一个 Home 一个 NotFound
    // this.$router.addRoute()  动态添加路由的方法

    // 获取一个权限数组
    // console.log(auths)

    const currentAuthRoutes = authRoutes.filter((route) => auths.includes(route.name));

    currentAuthRoutes.forEach(route => this.$router.addRoute('home', route) )

  },
};
</script>

<style>
</style>