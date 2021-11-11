<template>
  <div class="login">
    <!-- 登录页的地址是  http://localhost:8080/login -->
    <div class="form-container">
      <h2>系统登录</h2>
      <el-form :rules="rules" class="form" ref="form" :model="form">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :type="showPassword ? 'text' : 'password'"
            prefix-icon="el-icon-s-goods"
            v-model="form.password"
          >
            <template #suffix>
              <i
                @click="clickEyes"
                :class="showPassword ? 'el-icon-view' : 'el-icon-sunrise'"
              ></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="disabled"
            @click="login"
            style="width: 100%"
            type="primary"
            :loading='loading'
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "888888",
      },
      showPassword: false,
      loading: false,
      rules: {
        username: [
          {
            required: true,
            whitespace: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            whitespace: true,
            message: "密码不可为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    disabled() {
      const { username, password } = this.form;
      if (username.trim() && password.trim()) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    clickEyes() {
      // console.log('点击了眼睛')
      this.showPassword = !this.showPassword;
    },
    login() {
      // 将用户输入的用户名和密码，跟后台对接。
      // 如果用户名密码匹配那么就跳转到首页
      // 如果不匹配就提示用户名密码不匹配
      this.loading = true
      const { username, password } = this.form;
      // 假装用户名必须是 admin  密码是 888888  
      setTimeout(() => {
        if(username === 'admin' && password === '888888'){
          // console.log('密码匹配，要跳转')
          
          this.$message.success({
            message: '登陆成功',
            duration: 1000
          });
          // 登录成功了，可以获取到当前用户的登录信息了。 
          // 用户在其他页面就可以展示自己的信息了， 所以我们需要在登录成功之后，存储起来用户的信息(本地存储)
          // 假装我们获取了用户信息 用户名是 admin  头像是 https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80
          // 想要存储对象数据，默认只能存字符串， 可以将对象数据转化成 json 字符串存储
          const userInfo = {
            username: 'admin',
            avatar_url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
            token: '特殊的加密内容'
          }
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          this.$router.push('/')
        }else{
          this.$message.error({
            message: '错了哦，用户名密码不匹配',
            duration: 2000
          });
        }
        this.loading = false
      }, 500)
    },
  },
};
</script>

<style lang='less'>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  .form-container {
    margin: 0 auto;
    width: 520px;
    padding: 160px 30px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      margin: 0;
      color: #fff;
      font-size: 26px;
      margin-bottom: 20px;
    }
    .form {
      width: 100%;
      .el-input__inner {
        height: 50px;
        line-height: 50px;
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid #716d6d;
        color: #fff;
        text-indent: 40px;
        padding-left: 10px;
        position: relative;
      }
      .el-input--suffix .el-input__inner {
        padding-right: 40px;
      }
      .el-input__icon {
        line-height: 50px;
        padding-left: 10px;
        font-size: 20px;
        color: #889aa4;
      }
      .el-input__suffix {
        cursor: pointer;
        font-size: 20px;
        margin-right: 5px;
        line-height: 50px;
      }
    }
  }
}
</style>