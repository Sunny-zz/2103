<template>
  <div v-if="user">
    <Panel>
      <template #header>
        <router-link to="/">主页</router-link>
      </template>
      <template #content>
        <div class="content">
          <div>
            <el-avatar
              class="avatar"
              size="medium"
              shape="square"
              :src="user.avatar_url"
            >
            </el-avatar>
            <span>{{ user.loginname }}</span>
          </div>
          <div>{{ user.score }} 积分</div>
          <div>
            github
            <a
              target="_blank"
              :href="`https://github.com/${user.githubUsername}`"
              >@{{ user.githubUsername }}</a
            >
          </div>
          <div>注册时间 {{ user.create_at | moment("from", "now") }}</div>
        </div>
      </template>
    </Panel>

    <Panel>
      <template #header>
        <span>最近创建的话题</span>
      </template>
      <template #content>
        <PostItem
          v-for="topic in recent_topics"
          :key="topic.id"
          v-bind="topic"
        />
      </template>
    </Panel>

    <Panel>
      <template #header> 最近参与的话题 </template>
      <template #content>
        <PostItem
          v-for="topic in recent_replies"
          :key="topic.id"
          v-bind="topic"
        />
      </template>
    </Panel>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PostItem from "../components/PostItem.vue";
import Panel from "../containers/Panel.vue";
import axios from '../plugins/axios'
export default {
  components: { Panel, PostItem },
  data() {
    return {
      recent_replies: [],
      recent_topics: [],
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },

  watch: {
    "$route.params.username": {
      handler(newValue) {
        this.getUser(newValue);
      },
      immediate: true,
    },
    // 当 user 发生改变的时候，需要重新获取相关的 参与的话题 和 创建的话题 详情
    user : {
      // 监听 user 的变化
      // 1. 首次进入 user 页，默认 user 是 null 然后 action 触发之后 user 更新了
      // 2. 当在当前页切换其他用户
      async handler(newValue){
        // 要注意请求需要发多个而且要等待所有请求结束才能执行其他操作
        const res1 = await axios.all(newValue.recent_replies.map( topic => axios.get(`/topic/${topic.id}`) ))
        this.recent_replies = res1.map(ele => ele.data)

        const res2 = await axios.all(newValue.recent_topics.map( topic => axios.get(`/topic/${topic.id}`) ))
        this.recent_topics = res2.map(ele => ele.data)
      }
    },
  },
  methods: {
    ...mapActions(["getUser"]),
  },
};
</script>

<style lang='less'>
.content {
  > div {
    margin-bottom: 20px;
  }
}
</style>