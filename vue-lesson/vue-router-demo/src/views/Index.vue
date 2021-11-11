<template>
  <div>
    <el-button type="primary">
      <router-link class="link" :to="{ name: 'postlist' }"
        >文章列表</router-link
      >
    </el-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.link {
  color: #fff;
  text-decoration: none;
}
</style>