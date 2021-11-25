<template>
  <div class="app">
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Footer, Header }
};
</script>

<style lang='less'>
.app{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main{
    width: 90%;
    margin: 20px auto;
    max-width: 1400px;
    flex-grow: 1;
  }
}
</style>