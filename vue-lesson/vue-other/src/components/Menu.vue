<template>
  <div>
    <h5>菜单组件{{level}}</h5>
    <!-- 组件递归的时候还需要注意 第一次使用组件的时候传递了什么数据，递归的时候要传同样的数据， 而且在递归的时候需要设置条件，否则无限递归  -->
    <Menu v-if="level >= 1"  :level='level-1' />
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['level']
}
</script>

<style>

</style>