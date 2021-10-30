<template>
  <div>
    hello
    <LessDemo />
    <hr>
    <SassDemo />
    <hr>
    <StylusDemo />
    <hr>
    <LodashDemo />
    <hr>
    <!-- <SwiperDemo /> -->
    <hr>
    <VueSwiperDemo />
    <hr>
    <SlotDemo />
  </div>
</template>

<script>
import LessDemo from './components/LessDemo.vue'
import LodashDemo from './components/LodashDemo.vue'
import SassDemo from './components/SassDemo.vue'
import SlotDemo from './components/SlotDemo.vue'
import StylusDemo from './components/StylusDemo.vue'
// import SwiperDemo from './components/SwiperDemo.vue'
import VueSwiperDemo from './components/VueSwiperDemo.vue'

export default {
  components: { LessDemo, SassDemo, StylusDemo, LodashDemo, VueSwiperDemo, SlotDemo },
}
</script>

<style>

</style>