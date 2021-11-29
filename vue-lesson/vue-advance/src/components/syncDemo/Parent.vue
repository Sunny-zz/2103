<template>
  <div>
    <p>父组件内的 data: {{num}}</p>
    <Son :num.sync='num' />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  components: { Son },
  data() {
    return {
      num: 1000
    }
  },
}
</script>

<style>

</style>