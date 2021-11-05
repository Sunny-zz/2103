<template>
  <div class="tree-demo">
    <h3>树形控件</h3>
    <el-button @click="setCheckedByNode" type="primary">通过node设置</el-button>
    <el-button @click="getCheckedByNode" type="primary">通过node获取</el-button>
    <el-button @click="setCheckedBykey" type="primary">通过key设置</el-button>
    <el-button @click="getCheckedBykey" type="primary">通过key获取</el-button>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      ref="tree"
      node-key="id"
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :default-expanded-keys="defaultExpandedKeys"
      :default-checked-keys="defaultCheckedIds"
      show-checkbox
      :filter-node-method="filterNode"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "一级 1",
          id: 1,
          list: [
            {
              title: "二级 1-1",
              id: 2,
              list: [
                {
                  title: "三级 1-1-1",
                  id: 3,
                },
              ],
            },
          ],
        },
        {
          title: "一级 2",
          id: 4,
          list: [
            {
              title: "二级 2-1",
              id: 5,
              list: [
                {
                  title: "三级 2-1-1",
                  id: 6,
                },
              ],
            },
            {
              title: "二级 2-2",
              id: 7,
              list: [
                {
                  title: "三级 2-2-1",
                  id: 8,
                },
              ],
            },
          ],
        },
        {
          title: "一级 3",
          id: 9,
          list: [
            {
              title: "二级 3-1",
              id: 10,
              list: [
                {
                  title: "三级 3-1-1",
                  id: 11,
                },
              ],
            },
            {
              title: "二级 3-2",
              id: 12,
              list: [
                {
                  title: "三级 3-2-1",
                  id: 13,
                },
              ],
            },
          ],
        },
      ],
      // 该对象的作用是  指定 数据中哪个属性作为 label(展示的文字) 和 children(子节点)
      defaultProps: {
        children: "list",
        label: "title",
      },
      // 默认选中的节点的 key， 首先展示选中的效果
      // 默认打开的节点数组， 默认打开的数组不一定是默认选中的数组， 所以使用 组件的 getCheckedKeys 方法获取所有选中的节点数组
      defaultExpandedKeys: [],
      // 后台提供默认选中的节点数组， 可能是只给了 父节点并没有给子节点的 id，那么当我们展开选中的节点，使用这个数组就不行了
      defaultCheckedIds: [],
      filterText: "",
    };
  },
  // computed: {
  //   defaultExpandedKeys() {
  //     console.log(this.$refs.tree)
  //     return this.$refs.tree.getCheckedKeys()
  //   }
  // },
  watch: {
    // defaultCheckedIds: {
    //   handler(){
    //     this.$nextTick(()=> {
    //       this.defaultExpandedKeys = this.$refs.tree.getCheckedKeys(true)
    //     })
    //   },
    //   immediate: true
    // }
    filterText: {
      handler(value) {
        this.$refs.tree.filter(value);
      },
    },
  },
  mounted() {
    this.defaultExpandedKeys = this.$refs.tree.getCheckedKeys(true);
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    setCheckedByNode() {
      // 想要修改和获取选中的节点必须设置 node-key
      // setCheckedNodes(节点数组) 设置选中节点的时候，传递的节点数组数据，不需要是树形数组，传递扁平化数组
      this.$refs.tree.setCheckedNodes([
        {
          id: 9,
        },
        {
          id: 3,
        },
      ]);
    },
    getCheckedByNode() {
      const res = this.$refs.tree.getCheckedNodes(true);
      console.log(res);
    },
    setCheckedBykey() {
      this.$refs.tree.setCheckedKeys([1], true);
    },
    getCheckedBykey() {
      const res = this.$refs.tree.getCheckedKeys(true);
      console.log(res);
    },
    // 筛选函数，用来控制节点的展示
    // 每一个节点都会运行这个方法 返回这设置true这个节点就会展示
    // 函数内需要设置 3 参数  
    // 第一个 value  筛选的关键字 是需要 组件的 filter 方法传递的
    // 第二个 data  是筛选的当前节点的 对象
    // 第三个 node  当前筛选的节点，并不是真实 dom 节点
    filterNode(value, data, node) {
      console.log(value)
      console.log(data)
      console.log(node)
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
  },
};
</script>

<style>
.tree-demo {
  margin-left: 100px;
}
</style>