<template>
  <div class="edit-post">
    <el-form v-if="post" :model="post">
      <el-form-item label="Title :" label-width="100px">
        <el-input v-model="post.title"></el-input>
      </el-form-item>
      <el-form-item label="Author :" label-width="100px">
        <el-input
          style="width: 200px"
          v-model="post.author.loginname"
        ></el-input>
      </el-form-item>
      <el-form-item class="important" label="Importance :" label-width="100px">
        <el-rate
          :max="6"
          v-model="post.important"
          :colors="['#F7BA2A', '#F7BA2A', '#F7BA2A']"
        >
        </el-rate>
      </el-form-item>
      <el-form-item>
        <mavon-editor
          ref="mavonEditor"
          defaultOpen="edit"
          :subfield="false"
          :toolbars="toolbars"
          v-model="post.content"
        />
      </el-form-item>
      <el-form-item>
        <el-switch
          v-model="post.status"
          active-text="published"
          inactive-text="draft"
          active-value="published"
          inactive-value="draft"
        >
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Turndown from "turndown";
import Showdown from "showdown";
export default {
  props: ["id"],
  data() {
    return {
      post: null,
      toolbars: {
        bold: false, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  created() {
    this.$axios.get(`/postList/${this.id}`).then((res) => {
      // console.log(res);
      // html 解析成 md
      // 与之对应的插件 showdown 就是将 md 转换成 html
      const turndownService = new Turndown();
      res.content = turndownService.turndown(
        res.content
          .replace('<div class="markdown-text">', "")
          .replace("</div>", "")
      );
      this.post = res;
    });
  },
  beforeRouteLeave(to, form, next) {
    // next();
    // console.log(to)
    if (to.name !== "postlist") {
      this.$msgBox
        .confirm("当前页面的修改未保存, 是否确定离开?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
        .then(() => {
          next();
        })
        .catch(() => {});
    }else{
      next()
    }
  },
  methods: {
    async save() {
      // 点击保存 需要更新后台数据
      // 那么我们的 content 内容 默认的值是 markdown 形式，所以我们要转化。或者
      // console.log(this.post)
      // ref 写在了组件身上 那么 ref 获取的就是 组件本身
      const { post, id } = this;
      const converter = new Showdown.Converter();
      const newPost = {
        ...post,
        content:
          '<div class="markdown-text">' +
          converter.makeHtml(post.content) +
          "</div>",
      };
      // console.log(newPost)
      delete newPost.id;
      // this.$axios.put(`/postList/${id}`, newPost ).then(res => {
      //   console.log(res)
      // })
      // 请求的新语法  async await  比 then 好写一点
      // 当一个函数使用 async 关键字声明了，那么函数内部就可以使用 await 关键字了
      // await 关键字后面跟着 promise 或异步操作。 就相当于将异步操作变成同步的。 后面写的同步语法也会在这个语句执行后之后
      await this.$axios.put(`/postList/${id}`, newPost);
      // console.log(res);
      this.$router.push({ name: "postlist" });
    },
  },
};
</script>

<style>
.edit-post {
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
}

.important .el-form-item__content {
  display: flex;
  align-items: center;
  height: 40px;
}
</style>