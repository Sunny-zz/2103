<template>
  <div>
    <div v-for="ele in data" :key="ele.id">
      <!-- 传递 ele 给父组件内的插槽 -->
      <slot :ele='ele' />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'tag']
}
</script>

<style>

</style>