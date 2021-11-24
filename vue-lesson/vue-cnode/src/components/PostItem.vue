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
    <span class="tag">置顶</span>
    <h3>{{ title }}</h3>
    <span class="last-reply-count">{{ last_reply_at | moment("from", "now") }}</span>
  </div>
</template>

<script>
export default {
  props: ["author", "reply_count", "visit_count", "title", "last_reply_at"],
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