<template>
  <div class="app">
    <TableForm />
    <TableContent />
    <TablePagination />
    <PostModal />
  </div>
</template>

<script>
import PostModal from './components/PostModal.vue'
import TableContent from './components/TableContent.vue'
import TableForm from './components/TableForm.vue'
import TablePagination from './components/TablePagination.vue'
export default {
  components: { TableForm, TableContent, TablePagination, PostModal },
  
}
</script>

<style>
.app{
  padding-bottom: 50px;
}
</style>