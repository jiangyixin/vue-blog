import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

const state = {
  name: 'Jyx',
  date: '2017/03/15',
  list: []
};

export default new Vuex.Store({
  state, mutations, actions
})
