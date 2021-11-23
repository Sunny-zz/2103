<template>
  <el-dialog @close="$emit('close')" class="post-modal" title="Edit" :visible="dialogFormVisible">
    <el-form ref="myForm" :rules="rules" :model="formData">
      <el-form-item prop="country" label="类型">
        <el-select v-model="formData.country" clearable placeholder="类型">
          <el-option
            v-for="country in countrys"
            :key="country"
            :label="country"
            :value="country"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="title" label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formData.status" clearable placeholder="类型">
          <el-option key="published" label="published" value="published">
          </el-option>
          <el-option key="draft" label="draft" value="draft"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="重要性">
        <el-rate
          :max="6"
          v-model="formData.important"
          :colors="['#ccc', '#ccc', '#ccc']"
        >
        </el-rate>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">取 消</el-button>
      <el-button type="primary" @click="okFun">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        title: "",
        important: 0,
        country: "",
        status: "",
      }),
    }
  },
  data() {
    return {
      // formData: {
      //   title: "",
      //   important: 0,
      //   country: "",
      //   status: "",
      // },
      // dialogFormVisible: true,
      countrys: ["China", "Japan", "USA", "Eurozone"],
      rules: {
        title: [
          {
            required: true,
            message: "this is required",
            trigger: "blur",
          },
        ],
        country: [
          {
            required: true,
            message: "this is required",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    okFun() {
      this.$refs.myForm.validate((boolean) => {
        if (boolean) {
          // this.$emit('close')
          // 更新后台数据更新本地vuex
          this.$emit('handleOk')
        }
      });
    },
  },
};
</script>

<style lang='less'>
.post-modal {
  .el-input {
    width: 60%;
  }
  .el-form-item__content {
    display: flex;
    height: 40px;
    align-items: center;
  }
}
</style>