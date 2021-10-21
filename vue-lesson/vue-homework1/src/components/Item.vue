<template>
  <div class="item">
    <div class="item-top">
      <img :src="post.src" alt="" />
      <h2>
        <span>{{ post.title_import }}</span>
        <span>{{ post.title_content }}</span>
      </h2>
    </div>
    <div class="item-bottom">
      <!-- <p v-html="post.p"></p> -->
      <p v-if="post.p_key">
        {{ p.start }}<span>{{ post.p_key }}</span
        >{{ p.end }}
      </p>
      <p v-else>{{post.p}}</p>
      <!-- <p v-html="p">
       当一些复杂的运算写在 template 内，显得很乱， 而且有些操作写在 template 内不生效， 所以我们可以使用 vue 提供的计算属性来解决这个问题 
      </p> -->
      <img src="../assets/images/marker-2.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件传递的 src 属性
  // prop 可以当做 data 使用
  // props: ['src', 'p', 'title_import', 'title_content']
  props: ["post"],
  // 计算属性  computed
  // 该属性是一个对象
  // 对象下只能写方法
  // 方法内必须有返回值，返回的值就是计算属性的值
  // 计算属性也相当于 data 一样使用
  computed: {
    // p(){
    //   const {p, p_key} = this.post
    //   return p_key ? p.replace(p_key, `<span>${p_key}</span>`)  : p
    // }
    p() {
      // gfsdas hello o y qyeq queyq     hello
      const { p, p_key } = this.post;
      const ind = p.indexOf(p_key);
      return {
        start: p.slice(0, ind),
        end: p.slice(ind + p_key.length),
      };
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #484444;
  border: 1px solid #0d0d0d;
  padding: 20px;
}
.item .item-top {
  display: flex;
  justify-content: space-between;
}
.item .item-top img {
  width: 80px;
}
.item .item-top h2 {
  margin: 0;
  display: flex;
  font-size: 26px;
  flex-direction: column;
  color: #fff;
}
.item .item-top h2 span:first-child {
  color: rgb(240, 95, 37);
}

.item .item-bottom {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.item .item-bottom img {
  width: 16px;
}

.item .item-bottom p {
  margin: 0px;
}

.item .item-bottom p span {
  color: #fff;
}
</style>