<template>
  <div v-if="postList.length"  >
    <PostItem v-bind='post' v-for="post in postList" :key="post.id"/>
  </div> 
  <el-skeleton v-else :rows="18" animated /> 
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostItem from '../components/PostItem.vue'
export default {
  components: { PostItem },
  computed: {
    ...mapState({
      postList: state => state.postList.list
    })
  },
  watch: {
    '$route.params.tab': {
      handler(value){
        // console.log(value)
        const tab = value || 'all'
        this.getPosts(tab)
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['getPosts']),
    
  },
}
</script>

<style>

</style>