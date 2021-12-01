<template>
  <div class="dialog-demo">
    <transition name="dialog-slide">
      <div v-if="visible" @click="modalClick" class="dialog-wrapper">
        <div @click.stop="" class="dialog">
          <div class="dialog-header">
            <h3>{{ title }}</h3>
            <span v-if="showClose" @click="close" class="close">×</span>
          </div>
          <div class="dialog-content">
            <slot />
          </div>
          <div v-if="$slots['dialog-footer']" class="dialog-footer">
            <slot name="dialog-footer" />
          </div>
        </div>
      </div>
    </transition>
    <transition name="dialog-fade">
      <div v-if="modal && visible" class="mask"></div>
    </transition>
  </div>
</template>

<script>
// 自己按照 element ui 封装一个 对话框组件
// 组件的 功能
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    // 这个函数的功能是， 允许在弹窗关闭之前， 做一些事情，并且暂停关闭弹窗，由 beforeClose 的参数来控制弹窗是否关闭
    beforeClose: {
      type: Function,
    },
    // 是否打开的时候锁定滚动条
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    visible: {
      handler(newValue) {
        newValue
          ? this.lockScroll && (document.body.style.overflowY = "hidden")
          : (document.body.style.overflowY = "");
      },
    },
  },
  methods: {
    closeFun() {
      if (this.$listeners.close) {
        this.$emit("close");
      } else if (this.$listeners["update:visible"]) {
        this.$emit("update:visible", false);
      }
    },
    close() {
      // 在执行关闭操作之前， 要看一下是否传递了 beforeClose
      if (this.beforeClose) {
        this.beforeClose(() => {
          this.closeFun();
        });
      } else {
        // 父组件有可能使用了 .sync 修饰符
        // 也有可能传递了 close 自定义事件
        // 如何判断到底接收了那种自定义事件  $listeners
        // this.$emit('update:visible', false)
        this.closeFun();
      }
    },
    modalClick() {
      this.closeOnClickModal ? this.close() : "";
    },
  },
};
</script>

<style>
.dialog-demo .dialog-wrapper,
.dialog-demo .mask {
  position: fixed;
  /* 全屏大小 */
  /* width: 100vw;
  height: 100vh;
  top: 0;
  left: 0; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.dialog-demo .mask {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.dialog-demo .dialog {
  /* absolute 找 最近的祖先的 position   fixed  relative  absolute */
  /* position: absolute; */
  background-color: #fff;
  width: 30%;
  margin: 0 auto;
  margin-top: 15vh;
  border-radius: 2px;
  min-height: 200px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  position: relative;
}
.dialog-demo .dialog .dialog-header {
  padding: 20px 20px 10px;
}
.dialog-demo .dialog .dialog-header h3 {
  font-weight: normal;
  font-size: 16px;
  margin: 0;
}
.dialog-demo .dialog .dialog-header .close {
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
}
.dialog-demo .dialog .dialog-content {
  padding: 20px;
}
.dialog-demo .dialog .dialog-footer {
  padding: 10px 20px 20px;
  text-align: right;
}

.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 1s;
}

.dialog-slide-enter,
.dialog-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.dialog-slide-enter-active,
.dialog-slide-leave-active {
  transition: all 1s .5s;
}
</style>