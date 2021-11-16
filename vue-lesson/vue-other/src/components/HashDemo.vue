
<!-- 在 template 内 当标签名写成 变量的时候，不会解析 -->
<!-- 该组件在 template 内就不好实现 -->
<!-- 可以选择使用 函数渲染来创建 组件的 html 结构 -->

<script>
export default {
  props: ["tag", "hash"],
  // render 叫渲染函数 需要返回 vnode
  // 作用是给组件渲染 html 内容, 就不需要写 template
  // 该函数默认接收 h 作为参数
  // h 的其实就是  createElement 方法
  // 该方法用于创建  vnode
  //  createElement 用法
  // 接收两个参数
  // 第一个参数是标签名
  // 第二个参数是 标签内的内容, 如果内容只有文字的话, 直接写，如果内容不是文字，是其他的标签，那么写成数组，在使用 createElement 创建, 如果没有别的标签，但是需要给该标签设置属性，那么写成对象类型,当第二个参数是对象类型的时候，标签内的内容就需要当成第三个参数传递
  methods: {
    clickFun() {
      console.log(this.hash)
    }
  },
  // 字符串
  // 数组
  // 对象，
  render() {
    // return h(this.tag, [
    //   h(
    //     "a",
    //     {
    //       attrs: {
    //         href: "#" + this.hash,
    //       },
    //       on: {
    //         click: () => {
    //           console.log('点击了 a')
    //         }
    //       }
    //     },
    //     this.$slots.default
    //   ),
    // ]);
    // jsx 语法  当在 html 内嵌入 js 的话 需要使用 {}
    return (
      <this.tag>
        <a onclick={this.clickFun} href={"#" + this.hash}>{this.$slots.default}</a>
      </this.tag>
    );
  },
};
</script>

<style>
</style>