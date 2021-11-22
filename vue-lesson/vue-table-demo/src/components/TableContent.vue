<template>
  <div class="table-content">
    <el-table
      v-loading="loading"
      :data="showPostList"
      border
      style="width: 100%"
    >
      <el-table-column prop="num" label="序号" width="80"> </el-table-column>
      <el-table-column prop="title" label="标题">
        <template v-slot="{ row }">
          <div>
            {{ row.title }}<el-tag>{{ row.country }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="author.loginname" label="作者" width="150">
      </el-table-column>
      <el-table-column prop="important" label="重要性" width="150">
        <template v-slot="{ row }">
          <el-rate
            :max="row.important"
            disabled
            v-model="row.important"
            :colors="['#ccc', '#ccc', '#ccc']"
          >
          </el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100">
        <template v-slot="{ row }">
          <el-tag :type="row.status === 'published' ? 'success' : 'info'">{{
            row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240">
        <template v-slot="{ row }">
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button
            :type="row.status === 'published' ? '' : 'success'"
            size="mini"
            @click="changeStatus(row.id, row.status)"
            >{{ row.status === "published" ? "草稿" : "发布" }}</el-button
          >
          <el-button @click="del(row.id)" size="mini" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["showPostList"]),
    ...mapState(["page"]),
  },
  watch: {
    page: {
      handler() {
        this.loading = true;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      },
      immediate: true
    },
  },
  created() {
    this.getPostList();
  },
  methods: {
    ...mapActions(["getPostList", "delPost", "changePostStatus"]),
    async del(id) {
      await this.delPost(id);
      this.$notification({
        title: "成功",
        message: "删除成功",
        type: "success",
        duration: 1000,
      });
    },
    async changeStatus(id, status) {
      await this.changePostStatus({
        id,
        status: status === "published" ? "draft" : "published",
      });
      this.$message({
        showClose: true,
        message: "操作成功",
        type: "success",
        duration: 1000,
      });
    },
  },
};
</script>

<style>
.table-content{
  min-height: 1200px;
}
</style>