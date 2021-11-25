<template>
  <div v-if="user">
    <Panel>
      <template #header>
        <router-link to="/">主页</router-link>
      </template>
      <template #content>
        <el-avatar
          class="avatar"
          size="medium"
          shape="square"
          :src="user.avatar_url"
        >
        </el-avatar>
      </template>
    </Panel>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Panel from "../containers/Panel.vue";
export default {
  components: { Panel },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  created() {
    this.getUser(this.$route.params.username);
  },
  methods: {
    ...mapActions(["getUser"]),
  },
};
</script>

<style>
</style>