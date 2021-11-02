<template>
  <el-table
        :data="tableData"
        border
        style="width: 100%"
        highlight-current-row
      >
        <el-table-column align="center" prop="id" label="ID" width="60">
        </el-table-column>
        <el-table-column prop="title" label="Title" width="480">
        </el-table-column>
        <el-table-column align="center" prop="author" label="Author">
        </el-table-column>
        <el-table-column label="Importance">
          <template slot-scope="scope">
            <!-- <span style="margin-left: 10px">{{ scope.row.importance }}</span> -->
            <el-rate
              v-model="scope.row.importance"
              disabled
              :max="scope.row.importance"
              :icon-classes="['', '', 'icon-shixinwujiaoxing iconfont']"
              :colors="['', '', '#000']"
            ></el-rate>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="readings" label="Readings">
        </el-table-column>
        <el-table-column align="center" prop="status" label="Status">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === 'published' ? 'success' : 'info'"
            >
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
</template>

<script>
export default {
  props: ['tableData']
}
</script>

<style>

</style>