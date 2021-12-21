<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <p>{{count}}</p>
    <button @click="count++">+</button>
    <button @click="count--">-</button>-->
    <Dialog />

    <Suspense>
      <template #default>
        <User />
      </template>

      <template #fallback>
        <div>
          <h5>请稍等</h5>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Dialog from "./components/Dialog.vue";
// User 是一个异步组件
import User from "./components/User.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Dialog,
    User
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
