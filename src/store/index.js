import Vue from 'vue'
import Vuex from 'vuex'
import index from '@/pages/store/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      index: index
    }
})
