<template>
  <div class="post-list">
    <ul v-if="postList.length">
      <li v-for="post in postList" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <el-skeleton v-else :rows="6" animated />
    <!-- 分页器 -->
    <el-pagination
      @current-change="currentChange"
      :page-size="40"
      background
      layout="prev, pager, next, jumper"
      :total="600"
      :current-page='sessionStoragePage'
    >
    </el-pagination>
  </div>
</template>

<script>
//  后端接口  get  https://cnodejs.org/api/v1/topics  可选参数 limit=40  page=1
import axios from "axios";
export default {
  data() {
    return {
      postList: [],
      
    };
  },
  computed: {
    sessionStoragePage() {
      return sessionStorage.getItem('page')*1 ?? 1
    }
  },
  created() {
    // axios
    //   .get("https://cnodejs.org/api/v1/topics?limit=40&page=1")
    //   .then((res) => {
    //     // console.log(res.data.data)
    //     this.postList = res.data.data;
    //   });
    const page = sessionStorage.getItem('page')*1 ?? 1
    this.getPost(page)
  },
  methods: {
    currentChange(page) {
      console.log("换页了", page);
      sessionStorage.setItem('page', page)
      this.getPost(page)
      // axios
      //   .get(`https://cnodejs.org/api/v1/topics?limit=40&page=${page}`)
      //   .then((res) => {
      //     // console.log(res.data.data)
      //     this.postList = res.data.data;
      //   });
    },
    getPost(page = 1) {
      axios
        .get(`https://cnodejs.org/api/v1/topics?limit=40&page=${page}`)
        .then((res) => {
          // console.log(res.data.data)
          this.postList = res.data.data;
        });
    },
  },
};
</script>

<style>
</style>