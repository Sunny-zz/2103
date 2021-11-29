<template>
  <header>
    <div class="header-inner">
      <h1>
        <router-link to="/">
          <img
            src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
            alt=""
          />
        </router-link>
      </h1>
      <div class="header-right">
        <router-link to="/">首页</router-link>
        <router-link v-if="!info" to="/login">登录</router-link>
        <div v-else>
          <el-avatar
            class="avatar"
            size="medium"
            shape="square"
            :src="info.avatar_url"
          ></el-avatar>
          <span @click="logout">退出</span>
        </div>

        <router-link v-if="info" to='post/create'>
          <el-button type='success' size='small'>发布话题</el-button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      info: (state) => state.login.info,
    }),
  },
  methods: {
    ...mapMutations(['getInfo']),
    logout() {
      if(this.$route.path !== '/'){
        this.$router.push('/')
      }
      localStorage.removeItem('info')
      localStorage.removeItem('token')
      this.getInfo(null)
    }
  },
};
</script>

<style lang='less'>
header {
  background-color: rgb(44, 43, 43);
  .header-inner {
    height: 50px;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    h1 {
      width: 120px;
      margin: 0;
      img {
        width: 100%;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      >div{
        display: flex;
        align-items: center;
        color: #fff;
        margin-left: 20px;
        font-size: 12px;
        span{
          margin-right: 20px;
          cursor: pointer;
        }
      }
      a {
        color: #fff;
        margin-left: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>