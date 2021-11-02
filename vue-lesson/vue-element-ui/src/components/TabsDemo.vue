<template>
  <el-tabs class="tabs-demo" type="border-card">
    <el-tab-pane label="China">
      <TabItemTable :tableData='tableData' />
    </el-tab-pane>
    <el-tab-pane label="USA">
      <TabItemTable :tableData='tableData' />
    </el-tab-pane>
    <el-tab-pane label="Japan">
      <TabItemTable :tableData='tableData' />
    </el-tab-pane>
    <el-tab-pane label="Eurozone">
      <TabItemTable :tableData='tableData' />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabItemTable from './TabItemTable.vue';
export default {
  components: { TabItemTable },
  data() {
    return {
      tableData: [
        {
          id: "1",
          title: "Nets championship",
          author: "Wl",
          importance: 4,
          readings: 9999,
          status: "published",
        },
        {
          id: "2",
          title:
            "Pdkpjtrq Eggifn Uguiuugbw Nfmvimxfv Ixtk Ytqu Nfmvimxfv Ixtk ",
          author: "Eric",
          importance: 1,
          readings: 2655,
          status: "published",
        },
        {
          id: "3",
          title: "keven durant",
          author: "Eric",
          importance: 3,
          readings: 2663,
          status: "draft",
        },
        {
          id: "4",
          title: "Pdkpjtrq Eggifn Uguiuugbw Nfmvimxfv Ixtk Ytqu",
          author: "Eric",
          importance: 3,
          readings: 2663,
          status: "draft",
        },
      ],
    };
  },
};
</script>

<style>
.tabs-demo {
  width: 1000px;
}
.tabs-demo .el-rate__icon {
  font-size: 24px;
  margin-right: -4px;
}
</style>