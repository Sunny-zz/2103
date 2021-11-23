<template>
  <div class="app">
    <TableForm />
    <TableContent />
    <TablePagination />
  </div>
</template>

<script>
import TableContent from './components/TableContent.vue'
import TableForm from './components/TableForm.vue'
import TablePagination from './components/TablePagination.vue'
export default {
  components: { TableForm, TableContent, TablePagination},
  
}
</script>

<style>
.app{
  padding-bottom: 50px;
}
</style>