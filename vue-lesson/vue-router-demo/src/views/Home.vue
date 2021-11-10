<template>
  <div class="home">
    <!-- 首页的地址是 http://localhost:8080/ -->
    <div class="home-header">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-menu">
        <img :src="userInfo.avatar_url" :title="userInfo.username" alt="">
        <el-button type='text'>个人中心</el-button>
        <el-button @click="logout" type='text'>退出登录</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return JSON.parse(sessionStorage.getItem('userInfo'))
    }
  },
  methods: {
    logout() {
      console.log('点击退出')
      // 1. 回到登录页   $router.push
      // 2. 清除登录状态和数据   清空 sessionStorage
    }
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
    .breadcrumb{
      height: 50px;
      display: flex;
      align-items: center;
    }
    .right-menu{
      display: flex;
      align-items: center;
      img{
        height: 40px;
        margin-right: 10px;
      }
    }
  }
}
</style>