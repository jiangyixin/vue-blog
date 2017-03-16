import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  name: 'Jyx',
  date: '2017/03/15',
  list: [
    {
      id: 1,
      title: '展开运算符和剩余参数',
      date: '2017-03-15',
      content: ''
    },
    {
      id: 2,
      title: '安装 openSUSE 后我的配置',
      date: '2017-02-15',
      content: ''
    },
    {
      id: 3,
      title: '删除右键菜单上的 Open With Atom',
      date: '2017-01-05',
      content: ''
    }
  ]
};

export default new Vuex.Store({
  state, mutations, actions
})
