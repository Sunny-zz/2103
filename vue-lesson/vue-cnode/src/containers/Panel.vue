<template>
  <div class="panel">
    <div v-if="$slots.header" class="panel-header">
      <slot name='header' />
    </div>
    <div class="panel-content">
      <slot name='content' />
    </div>
  </div>
</template>

<style lang='less'>
.panel{
  margin-bottom: 15px;
  .panel-header{
    background-color: #f6f6f6;
    padding: 10px;
    border-radius: 3px 3px 0 0;
  }
  .panel-content{
    background-color: #fff;
    padding: 10px;
    border-radius:0 0 3px 3px ;
    min-height: 200px;
  }
}
</style>