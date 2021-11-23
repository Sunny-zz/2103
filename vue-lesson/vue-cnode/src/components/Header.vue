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
        <router-link to="/login">登录</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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
      a{
        color: #fff;
        margin-left: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>