<template>
  <div>
    <h5>我是第三方表格插件，下面是表格(假装有)</h5>
    <div>
      {{text}}
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  created () {
    setTimeout(() => {
      this.text = '表格'
    }, 1000)
  }
}
</script>

<style>

</style>