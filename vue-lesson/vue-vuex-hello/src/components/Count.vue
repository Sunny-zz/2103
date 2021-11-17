<template>
  <div class="count">
    <p>{{count}}</p>
    <button @click="add(1)">count + 1</button>
    <button @click="add(10)">count + 10</button>
    <button @click="add(100)">count + 100</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count 
    }
  },
  methods: {
    add(num) {
      // 要调用 store 内的 mutations 下的 addCount
      // this.$store.commit('addCount')
      // 当 mutations内的 addCount 需要传递参数的话
      this.$store.commit('addCount', num)
      // 触发 mutations 内的 addCount 也可以这样写
      // commit 方法传递对象作为参数， 对象内的 type 属性，属性值写需要调用的 mutation 函数。除了 type 之外的属性 payload
      // this.$store.commit({type: 'addCount', payload: num })
    }
  },
}
</script>

<style>

</style>