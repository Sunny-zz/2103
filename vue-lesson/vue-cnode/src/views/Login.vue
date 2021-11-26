<template>
  <Panel>
    <template #header>
      <router-link to="/">主页</router-link>
      <span>/</span>
      <span>登录</span>
    </template>
    <template #content>
      <el-form
        :model="ruleForm"
        hide-required-asterisk
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="用户名随便输入"
            style="width: 260px"
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="密码需要输入用户 token"
            style="width: 260px"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </template>
  </Panel>
</template>

<script>
import { mapActions } from 'vuex';
import Panel from "../containers/Panel.vue";
export default {
  components: { Panel },
  data() {
    return {
      ruleForm: {
        username: "",
        // 输入的密码需要是用户的 token， 因为用户名密码登录功能没有，只有 token 登录功能
        // 7c14e817-2163-42c1-bb48-a4d09d76eece
        
        // 170de8cc-f596-4b9a-b397-3b282c8a8caf
        password: "170de8cc-f596-4b9a-b397-3b282c8a8caf",
      },
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "用户名不能为空",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "密码不能为空",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(['getInfo']),
    login() {
      this.$refs.ruleForm.validate((boolean) => {
        if(boolean){
          // 输入没有问题了
          this.getInfo(this.ruleForm.password).then(() => {
            this.$router.push('/')
          }).catch(() => {
             this.$message.error('错了哦，token 有误');
          })
        }
      })
    },
  },
};
</script>

<style>
</style>