<template>
  <h2>Home</h2>
</template>

<script>

import axios from "axios";
export default {
  async created() {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
    console.log(res);
  },
};
</script>

<style>
</style>