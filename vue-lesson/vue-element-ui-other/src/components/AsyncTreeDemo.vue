<template>
  <div class="async-tree">
    <el-tree :props="props" :load="loadNode" lazy> </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "menuTitle",
        children: "menuList",
        // 当没有子节点的时候数据对象内设置了 leaf 属性，属性值为 true 的话，那么该节点就没有下拉三角
        // leaf 这个名字可以根据实际情况调整
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    // load 方法作用是加载节点， 当 tree 组件设置了 lazy 的时候才会使用
    // load 内就要提供如何加载节点，加载什么样的节点，以及初始节点的设置
    // 进入页面以及点击父节点的时候都会运行这个方法
    // 这个方法接收两个参数
    // 第一个参数 node
    // 第二个参数 resolve
    loadNode(node, resolve) {
      // 初始节点设置，也就是 node.level 的等级是 0 的时候
      console.log(node);
      console.log(resolve);
      // 判断 level 主要是初始化的时候处理
      if (node.level === 0) {
        resolve([
          { id: 1, menuTitle: "菜单1", leaf: true },
          { id: 2, menuTitle: "菜单2" },
        ]);
      } else {
        // 当我们点击了父节点的话需要向后台发送请求，请求回来的数据作为该父节点的子节点展示
        // 所以发请求的时候就需要知道点击了哪个父节点   node 内的 data 就是我们点击的数据的对象
        setTimeout(() => {
          if (node.data.menuTitle === "菜单2") {
            resolve([
              { id: 3, menuTitle: "菜单2-1", leaf: false },
              { id: 4, menuTitle: "菜单2-2", leaf: true },
            ]);
          }
        }, 1000);
      }
    },
  },
};
</script>

<style>
.async-tree {
  margin-left: 100px;
}
</style>