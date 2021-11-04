<template>
  <div class="form">
    <!-- 作为表单 el-form 的表单项 el-form-item, 拥有一些校验设置，比如必填，验证 -->
    <!-- 表单的验证规则也可以直接写在 form 组件上，写成一个对象 {name: [name 的校验规则]}  同样的 name 的 item 上也必须添加 prop 属性属性值是要校验的值 ， 要注意在 form 上的校验规则，不能直接在 template 上直接写，要写在 script 内 -->
    <el-form ref="myForm" :model="form" label-width="80px">
      <!-- rules required 必填 message 提示信息  trigger 什么时候校验  必须添加 prop 属性，属性值是对应的数据  -->
      <el-form-item
        prop="name"
        :rules="[
          {
            min: 3,
            max: 10,
            transform(value) {
              return value.trim();
            },
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
          // 当检验规则使用了 transform 那么后面的校验都是以 transform 转换后的数据做校验
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          {
            validator: validatorName,
            trigger: 'blur',
            required: true,
          },
        ]"
        label="活动名称"
      >
        <el-input
          :suffix-icon="nameValidator ? 'el-icon-loading' : ''"
          v-model="form.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <!-- 多个复选框为什么使用 group 包裹 -->
        <!-- 因为多个复选框，最终选择的值是数组形式 -->
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        prop="desc"
        :rules="[
          { trigger: 'blur', required: true, message: '必填项' },
          {
            trigger: 'blur',
            type: 'enum',
            required: true,
            enum: ['线上', '线下', '线上结合线下'],
            message: '只能写x xx 中的一种',
          },
        ]"
        label="活动形式"
      >
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      // name 发请求到后台校验是否重名  请求没结束时候显示等待 loading  icon
      nameValidator: false,
      // 对于一些插件的配置，比如 swiper 的配置  element form 的校验规则，这是数据，一般初始定义了，就不会被修改。那么就可以定义成 data
    };
  },
  methods: {
    validatorName(rule, value, callback) {
      // rule 当前自定义校验函数所在的检验规则对象
      // value 当前的值
      // callback  传参相当于报错并提示，不传参就相当于校验通过
      // console.log(rule)
      console.log(value);
      this.nameValidator = true;
      axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
        this.nameValidator = false;
        if (value === "username") {
          callback("重名了");
        } else {
          callback();
        }
      });
    },
    onSubmit() {
      // console.log("submit!", this.form);
      this.$refs.myForm.validate((bool, object) => {
        // console.log(bool)
        // console.log(object)
        if (bool) {
          console.log("成功通过");
        } else {
          console.log("没成功");
        }
      });
    },
    reset() {
      // 重置函数 resetFields 必须是加了校验的 才会重置
      this.form = {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      };
      this.$refs.myForm.clearValidate();
    },
  },
};
</script>

<style lang='less'>
.form {
  width: 600px;
  margin: 0 auto;
  .line {
    text-align: center;
  }
}
</style>