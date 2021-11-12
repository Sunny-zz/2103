<template>
  <div class="post-list">
    <el-table
      highlight-current-row
      :data="postList"
      border
      style="width: 100%"
      class="table"
      ref="table"
      v-loading="loading"
    >
      <!-- <el-table-column align="center" type="index" label="ID" width="80">
      </el-table-column> -->
      <el-table-column align="center" prop="num" label="ID" width="80">
      </el-table-column>
      <el-table-column
        align="center"
        prop="author.loginname"
        label="Author"
        width="120px"
      >
      </el-table-column>
      <el-table-column prop="important" label="Importance" width="120px">
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        label="Status"
        width="100px"
      >
        <template v-slot="{ row }">
          <el-tag :type="row.status === 'published' ? 'success' : 'info'">{{
            row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="Title">
        <template v-slot="{ row }">
          <router-link :to="{ name: 'editpost', params: { id: row.id } }">{{
            row.title
          }}</router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" width="120px" label="edit">
        <template v-slot="{ row }">
          <el-button
            size="small"
            type="primary"
            icon="el-icon-edit"
            @click="$router.push({ name: 'editpost', params: { id: row.id } })"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-skeleton v-else :rows="5" animated /> -->
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="200"
      :page-sizes="[20]"
      @current-change="changePage"
      :current-page="page * 1"
    >
    </el-pagination>
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
      loading: false,
    };
  },
  computed: {
    page() {
      return sessionStorage.getItem("postList-page") ?? 1;
    },
  },
  created() {
    // 我们的数据一共有 200 条
    // 需要分页展示 每页 20 条 一共 10 页
    // 所以每次请求只需要请求 20 条即可
    this.getPostList(this.page);
  },
  methods: {
    // 公共的函数   获取文章列表功能函数
    getPostList(page = 1, limit = 20) {
      // console.log(document.querySelector('.table'))
      // const loadingInstance = this.$loading.service({ target: '.table', fullscreen: false });
      this.loading = true;
      this.$axios.get(`/postList?_page=${page}&_limit=${limit}`).then((res) => {
        // console.log(res)
        this.postList = res.map((ele, index) => {
          ele.num = (page - 1) * limit + index + 1
          return ele 
        });
        setTimeout(() => {
          // loadingInstance.close()
          // 控制滚动条滚动到顶部
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          this.loading = false;
        }, 300);
      });
    },
    changePage(nowPage) {
      // console.log(nowPage)
      sessionStorage.setItem("postList-page", nowPage);
      this.getPostList(nowPage);
    },
  },
};
</script>

<style>
.post-list {
  margin-bottom: 50px;
  padding: 20px;
}
.el-table {
  margin-bottom: 30px;
  min-height: 1200px;
}
.el-table .el-table__cell .cell {
  white-space: nowrap;
}
</style>