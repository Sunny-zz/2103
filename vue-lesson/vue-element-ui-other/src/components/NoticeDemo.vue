<template>
  <div class="notice-demo">
    <ul>
      <li v-for="num in numbers" :key="num">
        <span class="text">{{ num }}</span>
        <el-button @click="del" size="mini" type="danger">删除</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { MessageBox } from 'element-ui';
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    del() {
      this.$messageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(res => {
        // console.log(res)
        // console.log('删除成功')
        this.$notification({
          message: '删除成功',
          type: 'success',
          duration: 1000
        });
      }).catch(err=> {
        console.log('删除失败')
      })
    },
  },
};
</script>

<style>
.notice-demo li {
  margin-bottom: 20px;
}
.text {
  margin-right: 20px;
}
/* element ui 内的一些弹窗提示组件，出现的时候并不是在当前组件的 div 内而是直接在 body 中，所以加权重需要注意 */
.el-notification .el-notification__content {
  margin: 2px 0 0;
}
</style>