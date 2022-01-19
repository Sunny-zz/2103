import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		message: 'hello uni-app vuex'
	},
	mutations:{
		changeMessage(state, message) {
			state.message = message
		}
	},
	getters:{
		messageLength(state) {
			return state.message.length
		}
	}
})

export default store

// state  mutation  action  getter  module
// $store.state    $store.commit   $store.dispatch  
