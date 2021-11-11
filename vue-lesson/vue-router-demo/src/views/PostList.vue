<template>
  <div class="post-list">
    <el-table
      highlight-current-row
      v-if="postList.length"
      :data="postList"
      border
      style="width: 100%"
    >
      <el-table-column align="center" type="index" label="ID" width="80">
      </el-table-column>
      <el-table-column align="center" prop="author.loginname" label="Author" width='120px'>
      </el-table-column>
      <el-table-column prop="important" label="Importance" width='120px'> </el-table-column>
      <el-table-column align="center" prop="status" label="Status" width='100px'>
        <template v-slot="{ row }">
          <el-tag :type="row.status === 'published' ? 'success' : 'info'">{{
            row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column align="center" width='120px' label="edit">
        <el-button size='small' type='primary' icon='el-icon-edit'>Edit</el-button>
      </el-table-column>
    </el-table>
    <el-skeleton v-else :rows="5" animated />
  </div>
</template>

<script>
// 在 vue 中会定义很多的函数或者变量
// data  computed  methods  prop 自定义事件  ref  插槽  filter  路由相关 等
// 这些属性或方法往往需要在 template 或者 script 标签中使用
// 在 template 中直接写名字使用
// 在 script 中 直接使用 this.名字
// 但是当被当作 watch 的时候也不需要加 this
export default {
  data() {
    return {
      postList: [],
    };
  },
  created() {
    // 我们的数据一共有 200 条
    // 需要分页展示 每页 20 条 一共 10 页
    // 所以每次请求只需要请求 20 条即可
    this.getPostList();
  },
  methods: {
    // 公共的函数   获取文章列表功能函数
    getPostList(page = 1, limit = 20) {
      this.$axios.get(`/postList?_page=${page}&_limit=${limit}`).then((res) => {
        this.postList = res;
      });
    },
  },
};
</script>

<style>

</style>