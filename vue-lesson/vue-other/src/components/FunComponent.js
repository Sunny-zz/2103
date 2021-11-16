// import Vue from 'vue'

// Vue.component('MyButton', {
//   data() {
//     return {
//       text: 'hello'
//     }
//   },
//   render() {
//     return <button>{this.text}</button>
//   }
// })

export default {
  data() {
    return {
      text: 'hello'
    }
  },
  methods: {
    click() {
      console.log(this.text)
    }
  },
  render() {
    return <button onclick={this.click}>{this.text}</button>
  }
}



