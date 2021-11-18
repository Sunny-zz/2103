<template>
  <div class="todo-head">
    <input v-model.trim="text" type="text" />
    <button @click="add">添加todo</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async add() {
      // 点击事件要做什么
      // console.log(this.text)
      const { text } = this;
      if (text) {
        // this.addTodo({
        //   newTodo: {
        //     text,
        //     isDone: false,
        //   },
        //   clearFun: () => (this.text = ""),
        // });
        // this.addTodo({ text, isDone: false }).then(() => {
        //   this.text = ''
        // })
        await this.addTodo({ text, isDone: false })
        // await 可以等待 promise 也可以等待 async 函数
        console.log('清空')
        this.text = ''
      }
    },
    ...mapActions(["addTodo"]),
  },
};
</script>

<style>
.todo-head {
  margin-bottom: 30px;
}
</style>