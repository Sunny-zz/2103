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
// 未读消息功能
// 1. 获取未读消息数  发对应的请求到 header 组件内展示
// 2. 获取已读和未读消息 在消息页面展示
// 3. 展示消息之后  直接在消息页面看到了所有未读消息之后 就直接标记全部消息为已读(发全部已读的请求)

// 首页的到底了功能 没有更多的话题了

// 404 页面   
// /xxx 会访问 PostList 我们做个判断push 到 404
// /xx/x/x/x/ 直接匹配 路由 path:'*' 

// 文章类别切换是等待效果， 还有取消请求功能 

// 编辑话题功能
// 1. 当在文章详情页看到了自己的话题的时候。标题后面会有一个编辑按钮，做编辑话题用
// 2. 点击编辑按钮到编辑话题页面
// 3. 展示文章内容，然后编辑，编辑之后发请求更新，请求成功之后回到文章详情页

// 回复评论的回复   content --->  "@xxx 你写的评论"

// 个人中心页 查看更多

import { mapMutations } from "vuex";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  components: { Footer, Header },
  created() {
    const info = localStorage.getItem("info");
    if (info) this.getInfo(JSON.parse(info));
  },
  methods: {
    ...mapMutations(["getInfo"]),
  },
};
</script>

<style lang='less'>
.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    width: 90%;
    margin: 20px auto;
    max-width: 1400px;
    flex-grow: 1;
  }
}
</style>