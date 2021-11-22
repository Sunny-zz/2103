<template>
  <el-dialog title="Edit" :visible.sync="dialogFormVisible">
    <el-form :model="formData">
      <el-form-item label="类型" >
        <el-select clearable  placeholder="类型">
          <el-option
            v-for="country in countrys"
            :key="country"
            :label="country"
            :value="country"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" >
        <el-input  ></el-input>
      </el-form-item>
      <el-form-item label="状态" >
        <el-select clearable placeholder="类型">
          <el-option
            key="published"
            label="published"
            value="published"
          >
          </el-option>
          <el-option
            key="draft"
            label="draft"
            value="draft"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性">
        <el-rate
            :max="6"
            :colors="['#ccc', '#ccc', '#ccc']"
          >
          </el-rate>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: '',
        important: '',
        country: '',
        status: ''
      },
      countrys: ["China", "Japan", "USA", "Eurozone"],
      country: "",
      dialogFormVisible: true
    };
  },
};
</script>

<style>
</style>