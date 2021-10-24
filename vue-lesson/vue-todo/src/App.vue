<template>
  <div class="todos">
    <h2>todo mvc</h2>
    <Todos />
    <!-- <input type="text" v-model="text">
    <input type="checkbox" v-model="checked" name="" id="">
    <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
    <select name="" id="" v-model="selected">
      <option value="a">aaaaa</option>
      <option value="b">bbbbb</option>
      <option value="c">ccccc</option>
    </select>
    1<input value="1" v-model="radioValue" type="radio" name="x" >
    2<input value="2" v-model="radioValue" type="radio" name="x" >
    3<input value="3" v-model="radioValue" type="radio" name="x" >
    4<input value="4" v-model="radioValue" type="radio" name="x" > -->
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
export default {
  name: "App",
  data() {
    return {
      // checked: true,
      // text: '',
      // selected: 'b',
      // radioValue: '1'
    }
  },
  components: {
    Todos,
  },
};
</script>

<style>
</style>