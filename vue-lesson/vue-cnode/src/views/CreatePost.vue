<template>
  <div class="create-post">
    <Panel>
      <template #header>
        <router-link to="/">主页</router-link> <span> / </span>
        <span>发布话题</span>
      </template>
      <template #content>
        <form action="">
          <div>
            <span>请选择板块: </span>
            <select v-model="post.tab" name="" id="">
              <option value="ask">问答</option>
              <option value="share">分享</option>
              <option value="job">招聘</option>
              <option value="dev">客户端测试</option>
            </select>
          </div>
          <div>
            <input v-model="post.title" type="text" />
          </div>
          <div>
            <!-- md 编辑器 -->
            <!-- 用了 md 编辑器，向后端发送 content 发送的是 md 字符串，也就是 写 md 语法，最后发 md 字符串   -->
            <textarea
              v-model="post.content"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <el-button @click="submit" type="primary">提交</el-button>
        </form>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../containers/Panel.vue";
import axios from "../plugins/axios";
export default {
  components: { Panel },
  data() {
    return {
      post: {
        title: "",
        tab: "",
        content: "",
      },
    };
  },
  methods: {
    async submit() {
      // 首先要判断输入的内容是否合理
      let { title, tab, content } = this.post;
      const accesstoken = localStorage.getItem("token");
      const res = await axios.post("/topics", {
        tab,
        title,
        content,
        accesstoken,
      });
      // console.log(res);
      this.$router.push(`/post/${res.topic_id}`)
    },
  },
};
</script>

<style>
</style>