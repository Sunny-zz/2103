<template>
  <div class="comment-item" :id="id">
    <router-link :to="`/user/${author.loginname}`">
      <el-avatar
        class="avatar"
        size="medium"
        shape="square"
        :src="author.avatar_url"
      ></el-avatar>
    </router-link>
    <div class="comment-right">
      <div>
        <span>{{ author.loginname }}</span>
        <span class="position">
          <a :href="`#${id}`">
            {{ index + 1 }}楼 · {{ create_at | moment("from", "now") }}</a
          >
        </span>
        <span v-if="ups.length" class="like">👍{{ ups.length }}</span>
      </div>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["author", "index", "create_at", "content", "ups", "id"],
};
</script>

<style lang='less'>
.comment-item {
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  display: flex;
  .comment-right {
    margin-left: 10px;
    flex-grow: 1;
    img {
      width: 100%;
    }
    > div {
      display: flex;
      .position {
        flex-grow: 1;
        color: rgb(95, 123, 247);
      }
    }
  }
}
</style>