<template>
  <div v-if="postList.length">
    <PostItem v-bind="post" v-for="post in postList" :key="post.id" />
    <div v-if="loading" class="loading">加载中...</div>
  </div>
  <el-skeleton v-else :rows="18" animated />
</template>

<script>
import { mapActions, mapState } from "vuex";
import PostItem from "../components/PostItem.vue";
import debounce from "lodash/debounce";
export default {
  components: { PostItem },
  computed: {
    ...mapState({
      postList: (state) => state.postList.list,
    }),
    tab() {
      return this.$route.params.tab || "all";
    },
  },
  data() {
    return {
      page: 2,
      loading: false,
    };
  },
  watch: {
    "$route.params.tab": {
      handler() {
        // console.log(value)
        // 在刷新的时候判断当前的类别是不是我们网站应有的类别
        console
        if(['all','ask','share','job','dev','good'].includes(this.tab)){

          this.getPosts({ tab: this.tab });
          this.page = 2
        }else{
          this.$router.push({name: 'err'})
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["getPosts"]),
    scrollFun: debounce(async function () {
      // console.log('滚动条事件触发了')
      // 获取到滚动条距离底部的距离
      // 滚动条距离顶部的距离 window.scrollY     document.documentElement.scrollTop
      // window 窗口的高度 window.innerHeight     document.documentElement.clientHeight
      // 文档的总高度 document.documentElement.scrollHeight
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (
        scrollHeight - windowHeight - scrollTop <= 200 &&
        this.postList.length
      ) {
        // 因为进入页面的时候 当数据没来的时候，没有滚动条 默认可能会直接触发触底，但是并不想触发 判断就加了额外的条件
        // console.log('触底')
        if (!this.loading) {
          this.loading = true;
          this.page++;
          await this.getPosts({ tab: this.tab, page: this.page });
          this.loading = false;
        }
      }
    }, 300),
  },
  mounted() {
    // this.scrollFun = debounce(() => {
    //   const scrollHeight = document.documentElement.scrollHeight;
    //   const windowHeight =
    //     window.innerHeight || document.documentElement.clientHeight;
    //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //   if (
    //     scrollHeight - windowHeight - scrollTop <= 200 &&
    //     this.postList.length
    //   ) {
    //     // 因为进入页面的时候 当数据没来的时候，没有滚动条 默认可能会直接触发触底，但是并不想触发 判断就加了额外的条件
    //     // console.log('触底')
    //     this.page++;
    //     this.getPosts({ tab: this.tab, page: this.page });
    //   }
    // }, 500);
    window.addEventListener("scroll", this.scrollFun);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollFun);
  },
};
</script>

<style>
.loading {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>