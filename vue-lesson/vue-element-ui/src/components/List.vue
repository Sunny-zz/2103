<template>
  <div>
    <div class="li" v-for="ele in data" :key="ele.id">
      <!-- 传递 ele 给父组件内的插槽 -->
      <!-- 传递 插槽 数据其实就是 给 slot 组件传递 prop -->
      <slot name='title' :text='ele.text' />
      <slot name='del' :id='ele.id' />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
.li{
  display: flex;
  align-items: center;
}
</style>