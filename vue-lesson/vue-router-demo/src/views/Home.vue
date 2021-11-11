<template>
  <div class="home">
    <!-- 首页的地址是 http://localhost:8080/ -->
    <div class="home-header">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <!-- 一个面包屑需要提供 展示的文字 以及 跳转的目标地址 -->
          <el-breadcrumb-item v-for="item in breadcrumb" :key="item">
            <router-link :to="{ path: item }">
              {{ item.slice(1) | translate }}
            </router-link>
          </el-breadcrumb-item>
          <!-- 在当前页面使用面包屑自带的导航切换到当页面的时候会报错 -->
          <!-- 其实是因为面包屑切换路由使用的是 a 标签做的切换 -->
          <!-- 我们将面包屑的切换路由替换成 router-link  也就是给面包屑写插槽 -->
        </el-breadcrumb>
      </div>
      <div class="right-menu">
        <img :src="userInfo.avatar_url" :title="userInfo.username" alt="" />

        <el-button class="post-list" type="text"
          ><router-link :to="{ name: 'postlist' }"
            >文章列表</router-link
          ></el-button
        >

        <el-button class="edit-post" type="text"
          ><router-link :to="{ name: 'editpost' }"
            >编辑文章</router-link
          ></el-button
        >

        <el-button class="profile" type="text"
          ><router-link :to="{ name: 'profile' }"
            >个人中心</router-link
          ></el-button
        >

        <el-button @click="logout" type="text">退出登录</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumb: [],
    };
  },
  watch: {
    "$route.matched": {
      handler(newValue) {
        // console.log(newValue)
        // 当匹配到的是首页的时候 path 的值是 ''  作为地址的话不好用替换成 '/'
        // this.breadcrumb = newValue.map((ele) => (ele.path ? ele.path : "/"));

        // 当直接进入首页的时候，匹配到的 matched 数组内有两个 一个是 Home 一个是 Home 的默认子路由 Index
        // 所以面包屑就会生成两个，但是此时我们并不想要两个。
        // 那么就需要在首页的时候控制面包屑数组

        if (this.$route.path === "/") {
          this.breadcrumb = ["/"];
        } else {
          this.breadcrumb = newValue.map((ele) => (ele.path ? ele.path : "/"));
        }
        // console.log(this.breadcrumb)
      },
      immediate: true,
    },
  },
  computed: {
    userInfo() {
      return JSON.parse(sessionStorage.getItem("userInfo"));
    },
  },
  methods: {
    logout() {
      // console.log('点击退出')
      // 1. 回到登录页   $router.push
      // 2. 清除登录状态和数据   清空 sessionStorage
      this.$router.push("/login");
      sessionStorage.removeItem("userInfo");
    },
  },
};
</script>

<style lang='less'>
.home {
  .home-header {
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .breadcrumb {
      height: 50px;
      display: flex;
      align-items: center;
    }
    .right-menu {
      display: flex;
      align-items: center;
      img {
        height: 40px;
        margin-right: 10px;
      }
      .profile,
      .edit-post,
      .post-list {
        a {
          color: #409eff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>