<template>
  <div class="table-form">
    <el-input v-model="title" placeholder="标题"></el-input>
    <el-select clearable v-model="important" placeholder="重要性">
      <el-option v-for="item in 6" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
    <el-select clearable v-model="country" placeholder="类型">
      <el-option
        v-for="country in countrys"
        :key="country"
        :label="country"
        :value="country"
      >
      </el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-search" @click="search"
      >搜索</el-button
    >
    <el-button type="primary" icon="icon-tianjia iconfont">添加</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      important: "",
      countrys: ["China", "Japan", "USA", "Eurozone"],
      country: "",
    };
  },
  computed: {
    // isEmpty() {
    //   return this.title === "" && this.important === "" && this.country === "";
    // },
  },
  methods: {
    ...mapActions(["searchPostList"]),
    search() {
      // if (this.isEmpty) {
      //   // console.log("没有输入");
      //   this.getPostList()
      // } else {
      //   const { title, country, important } = this;
      //   // 搜索请求    title_like=hello&important=2&country=China
      //   // const titleStr = title.trim() ? `title_like=${title.trim()}` : "";
      //   // const importantStr = important ? `important=${important}` : "";
      //   // const countryStr = country.trim() ? `country=${country}` : "";
      //   // const searchStr = titleStr + "&" + importantStr + "&" + countryStr;
      //   // console.log(searchStr)
      //   const searchStr =
      //     (title ? `title_like=${title}&` : "") +
      //     (important ? `important=${important}&` : "") +
      //     (country ? `country=${country}` : "");
      //   // console.log(searchStr)
      //   this.searchPostList(searchStr);
      // }
      const { title, country, important } = this;
      const searchStr =
        (title ? `title_like=${title}&` : "") +
        (important ? `important=${important}&` : "") +
        (country ? `country=${country}` : "");
      // console.log(searchStr)
      this.searchPostList(searchStr);
    },
  },
};
</script>

<style lang='less'>
.table-form {
  width: 80%;
  display: flex;
  margin: 0 auto;
  .iconfont {
    font-size: 14px;
    margin-right: 4px;
  }
  .el-button {
    padding: 12px 16px;
  }
}
</style>