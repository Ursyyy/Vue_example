import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from "./actions"
import getters from './getters'

const store = new Vuex.Store({
	state: {
		authUser: {},
		socketConnection: null,
		requireMenuData: {},
		load: true,
		notify: [],
		isIPhone: false,
		country_n_timestamp: {
			country:'Ukraine',
		},
		showRecVideos: true,
		showMenu: true,
		router: ''
	},
	getters,
	mutations,
	actions
})

export default store
