<template>
  <Panel>
    <template #header>
      <router-link class="tab" :to='tab | transformTab' v-for="tab in tabs" :key="tab">
        {{ tab }}
      </router-link>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </Panel>
</template>

<script>
import Panel from "../containers/Panel.vue";
export default {
  components: { Panel },
  data() {
    return {
      tabs: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"],
    };
  },
};
</script>

<style lang='less'>
a.tab {
  color: #80bd01;
  margin-right: 15px;
}
</style>