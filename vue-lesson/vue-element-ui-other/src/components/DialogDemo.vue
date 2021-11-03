<template>
  <el-dialog
    title="提示"
    :visible="dialogVisible"
    width="30%"
  >
    <span>23123</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
};
</script>

<style>
</style>