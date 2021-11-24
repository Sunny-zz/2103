<template>
  <div class="post-item">
    <el-avatar
      class="avatar"
      size="medium"
      shape="square"
      :src="author.avatar_url"
    ></el-avatar>
    <div class="count-wrap">
      <span class="reply-count">{{ reply_count }}</span>
      <span>/</span>
      <span class="visit-count">{{ visit_count }}</span>
    </div>
    <span v-if="isHasTag" :class="['tag', {active: top || good}]">{{ tagText }}</span>
    <h3>{{ title }}</h3>
    <span class="last-reply-count">{{ last_reply_at | moment("from", "now") }}</span>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: ["author", "reply_count", "visit_count", "title", "last_reply_at", 'top', 'good', 'tab'],
  computed: {
    isHasTag() {
      const pageTab = this.$route.params.tab || 'all'
      const isAllOrGoodPage = pageTab === 'all' || pageTab === 'good'
      return  this.top ? true :  isAllOrGoodPage ? true : false
    },
    tagText(){
      return this.top ? '置顶' : this.good ? '精华' : Vue.filter('transformTab')(this.tab)
    }
  },
};
</script>

<style lang='less'>
.post-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    flex-grow: 1;
    margin-left: 10px;
  }
  .avatar,
  .count-wrap,
  .tag,
  .last-reply-count {
    flex-shrink: 0;
  }
  .tag {
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 3px;
    background-color: #e5e5e5;
    color: #999;
    &.active{
      color: #fff;
      background-color: #80bd01;
    }
  }
  .count-wrap{
    width: 80px;
    font-size: 14px;
    margin: 0 10px;
    text-align: center;
    .reply-count {
      font-size: 16px;
      color: #9e78c0;
    }
  }
}
</style>