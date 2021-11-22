<template>
  <el-pagination
    class="table-pagination"
    :page-size="20"
    background
    layout="total, prev, pager, next, jumper"
    :total="totalNum"
    :current-page='page'
    @current-change='currentChange'
  >
  </el-pagination>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalNum']),
    ...mapState(['page'])
  },
  methods: {
    ...mapMutations(['changePage']),
    currentChange(page) {
      this.changePage(page)
    }
  },
};
</script>

<style>
.table-pagination {
  margin-top: 30px;
  margin-left: 30px;
}
</style>