<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- home --- about  -->
    <!-- slide 动效生效   slide 的进入写成效果 a  slide 消失写成效果 b -->
    <!-- 那么 home 就是 b 效果消失    about  就是 a 效果出现 -->
    <!-- about --- home   -->
    <!-- fade 动效生效  fade 的进入写成效果 b  fade 消失写成效果 a -->
    <!-- 那么 about 就是 a 效果消失    home  就是 b 效果出现 -->
    <!-- <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide",
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      if (to.path === "/") {
        this.transitionName = "fade";
      } else {
        this.transitionName = "slide";
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter,
.slide-leave-to {
  opacity: 0;
}

.fade-enter-active,
.slide-leave-active {
  transition: all 1s;
}

.slide-enter,
.fade-leave-to {
  transform: translateX(100%);
}
.slide-enter-active,
.fade-leave-active {
  transition: all 1s;
}
</style>
