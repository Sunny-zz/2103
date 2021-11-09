<template>
  <div>
    <h3>Home</h3>
    <ul>
      <li>
        <router-link to="/recommended">跳转到 推荐</router-link>
      </li>
      <li>
        <!-- 使用命名路由跳转的时候，动态路由参数需要使用 params 对象传递 -->
        <router-link  :to="{name: 'postList', params: {type: 'frontend'}, query: {title: '前端'}}">跳转到 前端</router-link>
      </li>
      <li>
        <!-- 默认 router-link 是包含匹配（路径包含），也就是只要页面地址包含 router-link 的 to 那么该 link 就处于激活状态 -->
        <!-- exact 是开启路由匹配的严格匹配模式 -->
        <router-link active-class="x" to="/backend">跳转到 后端</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active{
  color: red;
}
</style>