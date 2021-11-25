<template>
  <div v-if="post">
    <Panel>
      <template #content>
        <div class="post-header">
          <h2>
            <span class="tag" v-if="post.top || post.good">{{
              post.top ? "置顶" : "精华"
            }}</span>
            {{ post.title }}
          </h2>
          <p>
            <span class="disc">·</span>
            <span>发布于{{ post.create_at | moment("from", "now") }}</span>
            <span class="disc">·</span>
            <span>作者 {{ post.author.loginname }}</span>
            <span class="disc">·</span>
            <span>{{ post.visit_count }} 次浏览</span>
            <span class="disc">·</span>
            <span>来自 {{ post.tab | transformTab }}</span>
          </p>
        </div>
        <div class="post-content" v-html="post.content"></div>
      </template>
    </Panel>
    <Panel>
      <template #header>
        <span>{{post.reply_count}} 回复</span>
      </template>
      <template v-if="post.replies.length" #content>
        <PostCommentItem v-for="(comment,index) in post.replies" :key="comment.id"  v-bind='{...comment,index}'/>
      </template>
    </Panel>
  </div>
  <el-skeleton v-else :rows="8" animated />
</template>

<script>
import { mapActions, mapState } from "vuex";
import PostCommentItem from '../components/PostCommentItem.vue';
import Panel from "../containers/Panel.vue";

export default {
  components: { Panel, PostCommentItem },
  computed: {
    ...mapState({
      post: (state) => state.post.post,
    }),
  },
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getPost"]),
  },
};
</script>

<style lang='less'>
.post-header {
  .tag {
    font-size: 12px;
    color: #fff;
    padding: 2px 4px;
    background-color: #80bd01;
    border-radius: 3px;
  }
  .disc {
    margin: 0 10px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: #999;
  }
}

.post-content {
  img {
    width: 100%;
  }
}
</style>