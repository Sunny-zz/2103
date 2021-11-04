<template>
  <div class="tree-demo">
    <h3>树形控件</h3>
    <el-button type='primary'>按钮</el-button>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      show-checkbox
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
          list: [
            {
              title: "二级 1-1",
              list: [
                {
                  title: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          title: "一级 2",
          list: [
            {
              title: "二级 2-1",
              list: [
                {
                  title: "三级 2-1-1",
                },
              ],
            },
            {
              title: "二级 2-2",
              list: [
                {
                  title: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          title: "一级 3",
          list: [
            {
              title: "二级 3-1",
              list: [
                {
                  title: "三级 3-1-1",
                },
              ],
            },
            {
              title: "二级 3-2",
              list: [
                {
                  title: "三级 3-2-1",
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
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style>
.tree-demo {
  margin-left: 100px;
}
</style>