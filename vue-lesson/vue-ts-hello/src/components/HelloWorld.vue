<template>
  <div class="hello">
    <h1>{{ msg }} {{count}}</h1>
    <button @click="say('hello')">按钮</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({required: true, type: String}) 
  private msg!: string
  
  @Emit() 
  say(){}

}
</script>

<style scoped>

</style>
